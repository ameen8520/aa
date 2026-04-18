#!/bin/bash

echo "================================================"
echo "  تطبيق تحفيظ ملعب فلسطين - برنامج التثبيت"
echo "================================================"
echo ""

# التحقق من Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js غير مثبت!"
    echo "يرجى تثبيت Node.js من: https://nodejs.org/"
    exit 1
fi

echo "✓ تم العثور على Node.js"
echo ""
echo "🔧 جاري تثبيت التطبيق..."

cd tahfiz-desktop
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ تم التثبيت بنجاح!"
    echo ""
    echo "🚀 لتشغيل التطبيق اكتب:"
    echo "   npm run electron-dev"
    echo ""
    echo "📦 لبناء ملف التثبيت:"
    echo "   npm run electron-build"
else
    echo "❌ حدث خطأ في التثبيت"
fi
