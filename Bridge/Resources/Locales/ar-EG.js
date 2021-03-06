﻿Bridge.merge(new Bridge.CultureInfo("ar-EG", true), {
    englishName: "Arabic (Egypt)",
    nativeName: "العربية (مصر)",

    numberFormat: Bridge.merge(new Bridge.NumberFormatInfo(), {
        naNSymbol: "ليس برقم",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-لا نهاية",
        positiveInfinitySymbol: "+لا نهاية",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 3,
        percentDecimalSeparator: ".",
        percentGroupSeparator: ",",
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "ج.م.‏",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 3,
        currencyPositivePattern: 2,
        numberGroupSizes: [3],
        numberDecimalDigits: 3,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberNegativePattern: 3
    }),

    dateTimeFormat: Bridge.merge(new Bridge.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],
        abbreviatedMonthGenitiveNames: ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليه","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],
        abbreviatedMonthNames: ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليه","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],
        amDesignator: "ص",
        dateSeparator: "/",
        dayNames: ["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],
        firstDayOfWeek: 6,
        fullDateTimePattern: "dd MMMM, yyyy hh:mm:ss tt",
        longDatePattern: "dd MMMM, yyyy",
        longTimePattern: "hh:mm:ss tt",
        monthDayPattern: "dd MMMM",
        monthGenitiveNames: ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليه","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],
        monthNames: ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليه","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],
        pmDesignator: "م",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yyyy",
        shortestDayNames: ["ح","ن","ث","ر","خ","ج","س"],
        shortTimePattern: "hh:mm tt",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM, yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
