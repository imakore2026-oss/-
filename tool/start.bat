@echo off
setlocal

rem The stock "python.exe" that Windows ships even without Python installed
rem (it just opens the Microsoft Store) makes a plain "where" check unreliable,
rem so we confirm by actually running code instead.
set "PY_CMD="
set "PY_PROBE=%TEMP%\py_probe_%RANDOM%.txt"
set "PY_INSTALLER=%TEMP%\python-installer.exe"

py -3 -c "print(1)" 1>"%PY_PROBE%" 2>nul
if exist "%PY_PROBE%" (
    findstr /x "1" "%PY_PROBE%" >nul 2>nul
    if not errorlevel 1 set "PY_CMD=py -3"
    del "%PY_PROBE%" >nul 2>nul
)

if not defined PY_CMD (
    python -c "print(1)" 1>"%PY_PROBE%" 2>nul
    if exist "%PY_PROBE%" (
        findstr /x "1" "%PY_PROBE%" >nul 2>nul
        if not errorlevel 1 set "PY_CMD=python"
        del "%PY_PROBE%" >nul 2>nul
    )
)

if not defined PY_CMD (
    echo Python not found. Installing it now, please wait...
    powershell -NoProfile -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -UseBasicParsing -Uri 'https://www.python.org/ftp/python/3.12.7/python-3.12.7-amd64.exe' -OutFile '%PY_INSTALLER%'"
    if not exist "%PY_INSTALLER%" (
        echo Failed to download Python. Please check your internet connection.
        pause
        exit /b 1
    )
    echo Installing Python...
    "%PY_INSTALLER%" /quiet InstallAllUsers=0 PrependPath=1 Include_launcher=1
    del "%PY_INSTALLER%"
    echo.
    echo Install complete.
    echo Please close this window and double-click start.bat again.
    pause
    exit /b 0
)

echo Checking required components (first run only, may take a moment)...
%PY_CMD% -m pip install --quiet --disable-pip-version-check --upgrade pip >nul 2>nul
%PY_CMD% -m pip install --quiet --disable-pip-version-check pypdf openpyxl
if errorlevel 1 (
    echo Failed to install required components. Please check your internet connection.
    pause
    exit /b 1
)

%PY_CMD% "%~dp0watch_folder.py"

echo.
echo Tool stopped.
pause
