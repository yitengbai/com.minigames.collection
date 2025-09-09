@echo off
setlocal enabledelayedexpansion
if "%~1"=="" (
    echo Error: No input file provided.
    exit /b
)
set "input_file=%~1"
set "output_file=%~dpn1.gif"
if not "%~x1"==".mp4" if not "%~x1"==".avi" (
    echo Error: Only MP4 or AVI files are supported.
    exit /b
)
for /f "tokens=1,2 delims=x" %%A in ('"%~dp0ffprobe.exe" -v error -select_streams v:0 -show_entries stream^=width^,height -of csv^=p^=0:s^=x "%input_file%" 2^>^&1') do (
    set "width=%%A"
    set "height=%%B"
)
set "target_width=250"
if !width! gtr !height! (
    set /a "target_height=!target_width! * 9 / 16"
) else (
    set /a "target_height=!target_width! * 16 / 9"
)
"%~dp0ffmpeg.exe" -i "%input_file%" -vf "fps=15,scale=%target_width%:%target_height%:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 "%output_file%"
if not exist "%output_file%" (
    echo Error: GIF conversion failed. Check FFmpeg installation.
    exit /b
)
del "%input_file%"
if exist "%input_file%" (
    echo Warning: Could not delete source file.
) else (
    echo Success: Source file deleted.
)
echo Output GIF: 
%output_file%