@echo off
chcp 65001 >nul
echo ================================================
echo   تطبيق تحفيظ - تثبيت تطبيق الموبايل
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

REM التحقق من Java
where java >nul 2>nul
if %errorlevel% neq 0 (
    echo ⚠️  Java غير مثبت (مطلوب لبناء APK)
    echo يرجى تثبيت Java من: https://www.oracle.com/java/
)

echo ✓ تم العثور على Node.js

echo.
echo 🔧 جاري تثبيت تطبيق الموبايل...
cd tahfiz-mobile
call npm install

if %errorlevel% equ 0 (
    echo.
    echo ✅ تم التثبيت بنجاح!
    echo.
    echo 🚀 لتشغيل التطبيق:
    echo    npm start
    echo.
    echo 📱 لبناء ملف APK:
    echo    npm run build-apk
) else (
    echo ❌ حدث خطأ في التثبيت
)

pause
