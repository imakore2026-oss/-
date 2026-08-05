@echo off
chcp 65001 >nul
setlocal
set PYTHONUTF8=1

rem Windows標準の「python.exe」はPython未インストールでもMicrosoft Storeへの
rem 案内用ダミーとして存在することがあり、where だけでは誤判定するため、
rem 実際にコードを実行できるかどうかで確認する。
set "PY_CMD="
set "PY_PROBE=%TEMP%\py_probe_%RANDOM%.txt"

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
    echo Pythonが見つかりません。自動でインストールします。しばらくお待ちください...
    set "PY_INSTALLER=%TEMP%\python-installer.exe"
    powershell -NoProfile -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://www.python.org/ftp/python/3.12.7/python-3.12.7-amd64.exe' -OutFile '%PY_INSTALLER%'"
    if not exist "%PY_INSTALLER%" (
        echo Pythonのダウンロードに失敗しました。インターネット接続を確認してください。
        pause
        exit /b 1
    )
    echo Pythonをインストール中です...
    "%PY_INSTALLER%" /quiet InstallAllUsers=0 PrependPath=1 Include_launcher=1
    del "%PY_INSTALLER%"
    echo.
    echo インストールが完了しました。
    echo 一度このウィンドウを閉じて、もう一度「作業開始.bat」をダブルクリックしてください。
    pause
    exit /b 0
)

echo 必要な部品を確認しています（初回のみ少し時間がかかります）...
%PY_CMD% -m pip install --quiet --disable-pip-version-check --upgrade pip >nul 2>nul
%PY_CMD% -m pip install --quiet --disable-pip-version-check pypdf openpyxl
if errorlevel 1 (
    echo 部品のインストールに失敗しました。インターネット接続を確認してください。
    pause
    exit /b 1
)

%PY_CMD% "%~dp0watch_folder.py"

echo.
echo ツールが終了しました。
pause
