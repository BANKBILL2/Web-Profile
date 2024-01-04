export function IsEmpty(value) {
    return (value == null || (typeof value === "string" && value.trim().length === 0));
}

export function CheckEmailFormat(email) {
    try {
        const EmailPattern = /\S+@\S+\.\S+/;
        let result = false;
        if (email === null || email === '') return result;
        result = EmailPattern.test(email);
        return result;
    } catch (error) {
        console.log('CheckEmailFormat Error: ', error.message);
    }
}

export function CheckMobileNumberThaiFormat(number) {
    try {
        let res = { result: null, caseType: null };
        const NumberPattern = /^[0-9]*$/;
        const result = NumberPattern.test(number);

        if (number === null || number === '') { //กรุณาใส่เบอรฺ์ติดต่อเฉพาะตัวเลข
            res.result = false;
            res.caseType = 'H';
            return res;
        }
        else if (result === false) { //กรุณาใส่เบอรฺ์ติดต่อเฉพาะตัวเลข
            res.result = false;
            res.caseType = 'H';
            return res;
        }
        else if (number.substring(0, 1) !== '0') { //กรุณาใส่เบอรฺ์ติดต่อเริ่มต้นด้วยเลข 0
            res.result = false;
            res.caseType = 'B';
            return res;
        }
        else if (number.substring(0, 2) === '01') { //ไม่สามารถใส่เบอรฺ์ติดต่อเริ่มต้นด้วยเลข 01 ได้ กรุณาใส่ข้อมูลใหม่
            res.result = false;
            res.caseType = 'I';
            return res;
        }
        else if (number.substring(0, 2) === '02') { //ไม่สามารถใส่เบอรฺ์ติดต่อเริ่มต้นด้วยเลข 02 ได้ กรุณาใส่ข้อมูลใหม่
            res.result = false;
            res.caseType = 'C';
            return res;
        }
        else if (number.substring(0, 2) === '03') { //ไม่สามารถใส่เบอรฺ์ติดต่อเริ่มต้นด้วยเลข 03 ได้ กรุณาใส่ข้อมูลใหม่
            res.result = false;
            res.caseType = 'D';
            return res;
        }
        else if (number.substring(0, 2) === '04') { //ไม่สามารถใส่เบอรฺ์ติดต่อเริ่มต้นด้วยเลข 04 ได้ กรุณาใส่ข้อมูลใหม่
            res.result = false;
            res.caseType = 'E';
            return res;
        }
        else if (number.substring(0, 2) === '05') { //ไม่สามารถใส่เบอรฺ์ติดต่อเริ่มต้นด้วยเลข 05 ได้ กรุณาใส่ข้อมูลใหม่
            res.result = false;
            res.caseType = 'F';
            return res;
        }
        else if (number.substring(0, 2) === '07') { //ไม่สามารถใส่เบอรฺ์ติดต่อเริ่มต้นด้วยเลข 07 ได้ กรุณาใส่ข้อมูลใหม่
            res.result = false;
            res.caseType = 'G';
            return res;
        }
        else if (number.substring(0, 2) === '00') { //ไม่สามารถใส่เบอรฺ์ติดต่อเริ่มต้นด้วยเลข 00 ได้ กรุณาใส่ข้อมูลใหม่
            res.result = false;
            res.caseType = 'L';
            return res;
        }
        else if (number.substring(0, 1) === '0' || number.substring(0, 2) === '06' || number.substring(0, 2) === '08' || number.substring(0, 2) === '09') {
            const MobileNumberPattern = /^(\d{3})(\d{3})(\d{4})$/;
            const result2 = MobileNumberPattern.test(number);

            if (result2 === false) { //กรุณาใส่เบอร์โทรศัพท์เคลื่อนที่เฉพาะตัวเลขให้ครบ 10 หลัก (ขึ้นต้นด้วย 06, 08 และ 09)
                res.result = false;
                res.caseType = 'J';
                return res;
            }
            else {
                res.result = true;
                res.caseType = null;
                return res;
            }
        }
        else {
            res.result = true;
            res.caseType = null;
            return res;
        }

        return res;
    } catch (error) {
        console.log('CheckEmailFormat Error: ', error.message);
    }
}

export function CheckMobileNumberThaiFormatQueue(number) {
    try {
        let res = { result: null, caseType: null };
        const NumberPattern = /^[0-9]*$/;
        const result = NumberPattern.test(number);

        if (number === null || number === '') { //กรุณาใส่เบอรฺ์ติดต่อเฉพาะตัวเลข
            res.result = false;
            res.caseType = 'H';
            return res;
        }
        else if (result === false) { //กรุณาใส่เบอรฺ์ติดต่อเฉพาะตัวเลข
            res.result = false;
            res.caseType = 'H';
            return res;
        }
        else if (number.substring(0, 1) !== '0') { //กรุณาใส่เบอรฺ์ติดต่อเริ่มต้นด้วยเลข 0
            res.result = false;
            res.caseType = 'B';
            return res;
        }
        else if (number.substring(0, 2) === '02') { //ไม่สามารถใส่เบอรฺ์ติดต่อเริ่มต้นด้วยเลข 02 ได้ กรุณาใส่ข้อมูลใหม่
            res.result = false;
            res.caseType = 'C';
            return res;
        }
        else if (number.substring(0, 2) === '00') { //ไม่สามารถใส่เบอรฺ์ติดต่อเริ่มต้นด้วยเลข 00 ได้ กรุณาใส่ข้อมูลใหม่
            res.result = false;
            res.caseType = 'L';
            return res;
        }
        else if (number.substring(0, 1) === '0') {
            const MobileNumberPattern = /^(\d{3})(\d{3})(\d{4})$/;
            const result2 = MobileNumberPattern.test(number);

            if (result2 === false) { //กรุณาใส่เบอร์โทรศัพท์เคลื่อนที่เฉพาะตัวเลขให้ครบ 10 หลัก (ขึ้นต้นด้วย 0 และไม่ใช่ 02)
                res.result = false;
                res.caseType = 'K';
                return res;
            }
            else {
                res.result = true;
                res.caseType = null;
                return res;
            }
        }
        else {
            res.result = true;
            res.caseType = null;
            return res;
        }

        return res;
    } catch (error) {
        console.log('CheckEmailFormat Error: ', error.message);
    }
}

export function IsSqlInjection(textInput) {
    try {
        let isSqlInjection = false;

        if (textInput === null || textInput === '' || textInput === undefined || textInput === 0) {
            return isSqlInjection;
        }
        else {
            const sqlCheckList = [
                "a'",
                "'",
                "--",
                ";--",
                "/*",
                "*/",
                "@@",
                "xp_",
                "exec ",
                "EXEC ",
                "fetch",
                "<input",
                "<form",
                "<script",
                "<input />",
                "<form />",
                "<script />",
                "<input/>",
                "<form/>",
                "<script/>",
                ";input",
                ";form",
                ";script",
                "&lt;input /&gt;",
                "&lt;form /&gt;",
                "&lt;script /&gt;",
                "&lt;input/&gt;",
                "&lt;form/&gt;",
                "&lt;script/&gt;",
                "javascript:",
                "vbscript:",
                "javascript :",
                "vbscript :",
                "<javascript"
            ];

            for (let i = 0; i <= sqlCheckList.length; i++) {
                if (textInput.indexOf(sqlCheckList[i]) >= 0) {
                    isSqlInjection = true;
                    break;
                }
            }
        }

        return isSqlInjection;
    } catch (error) {
        console.log('IsSqlInjection Error: ', error.message);
    }
}

