@echo off
chcp 65001 >nul
setlocal
set PYTHONUTF8=1

set PY_CMD=
where py >nul 2>nul
if %errorlevel%==0 (
    set PY_CMD=py
) else (
    where python >nul 2>nul
    if %errorlevel%==0 (
        set PY_CMD=python
    )
)

if "%PY_CMD%"=="" (
    echo Pythonが見つかりません。自動でインストールします。しばらくお待ちください...
    set "PY_INSTALLER=%TEMP%\python-installer.exe"
    powershell -NoProfile -Command "Invoke-WebRequest -Uri 'https://www.python.org/ftp/python/3.12.7/python-3.12.7-amd64.exe' -OutFile '%PY_INSTALLER%'"
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
