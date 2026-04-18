@echo off
chcp 65001 >nul
echo ================================================
echo   تطبيق تحفيظ - تثبيت موقع الويب
echo ================================================
echo.

REM التحقق من Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js غير مثبت!
    echo يرجى تثبيت Node.js من: https://nodejs.org/
    pause
    exit /b 1
)

echo ✓ تم العثور على Node.js
echo.
echo 🔧 جاري تثبيت موقع الويب...

cd tahfiz-website
call npm install

if %errorlevel% equ 0 (
    echo.
    echo ✅ تم التثبيت بنجاح!
    echo.
    echo 🚀 لتشغيل الموقع:
    echo    npm start
    echo.
    echo ثم افتح المتصفح على: http://localhost:3000
) else (
    echo ❌ حدث خطأ في التثبيت
)

pause
