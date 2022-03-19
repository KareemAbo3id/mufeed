"use strict";

/*
 * PRINT INDEX SCRIPT
 */

// THE MAIN SCRIPT BUTTON: PRINT_INDEX_BTN
const PRINT_INDEX_BTN = document.querySelector("#print_index_btn");
// ========================================================================
// CUSTOMER DATA VARIABLES:
// CUSTOMER_NAME:
const CUST_NAME = document.querySelector("#CUST_NAME");
const custNameAll = document.getElementById("VIEW_CUST_NAME");
//CREDIT_LIMIT:
const CUST_CREDIT_LIMIT = document.getElementById("CUST_CREDIT_LIMIT");
const CUST_CREDIT_LIMIT_CURRENCY = document.getElementById(
  "CUST_CREDIT_LIMIT_CURRENCY"
);
// CUSTOMER_NO:
const CUST_NO = document.getElementById("CUST_NO");
//=========================================================================
// 1) TASHEEL_APP:
const TASHEEL_APP_CHECK = document.getElementsByName("TASHEEL_APP_CHECK");
const TASHEEL_APP_VERFIY = document.querySelector("#TASHEEL_APP_VERFIY");
// 2) WARRANT_SUPPORT:
const WARRANT_SUPPORT_CHECK = document.getElementsByName(
  "WARRANT_SUPPORT_CHECK"
);
const WARRANT_SUPPORT_VERFIY = document.querySelector(
  "#WARRANT_SUPPORT_VERFIY"
);
// 3) CUST_TRADE_LOG:
const CUST_TRADE_LOG_CHECK = document.getElementsByName("CUST_TRADE_LOG_CHECK");
const CUST_TRADE_DATE_DAY = document.querySelector(
  "#CUST_TRADE_LOG_EXPIRY_DATE-DAY"
);
const CUST_TRADE_DATE_MONTH = document.querySelector(
  "#CUST_TRADE_LOG_EXPIRY_DATE-MONTH"
);
const CUST_TRADE_DATE_YEAR = document.querySelector(
  "#CUST_TRADE_LOG_EXPIRY_DATE-YEAR"
);
// 4) VAT_CERT:
const VAT_CERT_CHECK = document.getElementsByName("VAT_CERT_CHECK");
// 5) NATIONAL_ID_CHECK:
const NATIONAL_ID_CHECK = document.getElementsByName("NATIONAL_ID_CHECK");
// 6) FORIGN_ID_CHECK:
const FORIGN_ID_CHECK = document.getElementsByName("FORIGN_ID_CHECK");
// 7) MOVE_CREDIT_CHECK:
const MOVE_CREDIT_CHECK = document.getElementsByName("MOVE_CREDIT_CHECK");
// 8) CUST_ATTORNEY_CHECK:
const CUST_ATTORNEY_CHECK = document.getElementsByName("CUST_ATTORNEY_CHECK");
// 9) CUST_LICENSE_CHECK:
const CUST_LICENSE_CHECK = document.getElementsByName("CUST_LICENSE_CHECK");
// 10) NATIONAL_ADDRESS_CHECK:
const NATIONAL_ADDRESS_CHECK = document.getElementsByName(
  "NATIONAL_ADDRESS_CHECK"
);
// 11) CHECK_CUST_SAVED:
const CHECK_CUST_SAVED = document.getElementsByName("CHECK_CUST_SAVED");
// 12) MAKE_DATE:
const MAKE_DATE_DAY = document.getElementById("MAKE_DATE-DAY");
const MAKE_DATE_MONTH = document.getElementById("MAKE_DATE-MONTH");
const MAKE_DATE_YEAR = document.getElementById("MAKE_DATE-YEAR");
// 13) EMPLOYEE_NAME:
const MAKE_EMPLOYEE_NAME = document.getElementById("MAKE_EMPLOYEE_NAME");
const REVIEW_EMPLOYEE_NAME = document.getElementById("REVIEW_EMPLOYEE_NAME");
const REGIST_EMPLOYEE_NAME = document.getElementById("REGIST_EMPLOYEE_NAME");
// ========================================================================
// true/false marks
const trueMark = `<i class="bi bi-check2"></i>`;
const falseMark = `<i class="bi bi-x"></i>`;
// the result window of customer data index
let resWin;
// ========================================================================

// PRINT BUTTON FUNCTION:
PRINT_INDEX_BTN.addEventListener("click", () => {
  //==========================================//
  // THE INDEX RESULT:
  let INDEX_RESULT_PAGE = `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.8.1/font/bootstrap-icons.min.css"
      integrity="sha512-Oy+sz5W86PK0ZIkawrG0iv7XwWhYecM3exvUtMKNJMekGFJtVAhibhRPTpmyTj8+lJCkmWfnpxKgT2OopquBHA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap");
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html {
        font-size: 12px;
        font-weight: bold;
      }
      body {
        padding: 10px;
        padding-top: 0;
        font-family: "Cairo", sans-serif;
        font-size: 1rem;
        line-height: 1.2;
        color: #000;
        background-color: #fff;
      }
      .hide {
        display: none;
      }
      #ALERT_BOX {
        position: absolute;
        width: fit-content;
        top: 2%;
        left: 50%;
        font-size: 18px;
        transform: translateX(-50%);
        padding: 6px 20px;
        overflow: hidden;
        border-radius: 3px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }
      .print-button {
        border-bottom: 1px solid hsl(0, 0%, 62%);
        padding: 10px 0;
        margin-bottom: 20px;
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
      }
      .print-button button {
        padding: 10px;
        line-height: 1;
        cursor: pointer;
        border: 1px solid #9e9e9e;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        font-weight: normal;
        background-color: #e0e0e0;
        font-size: 26px;
        color: #456b87;
      }
      .print-button button#closePage {
        color: #dd4343;
      }
      .index-title {
        text-align: center;
        text-decoration: underline;
        margin: 25px 0;
      }
      .page_head {
        width: 100%;
        padding: 0 50px;
        background-color: rgb(180, 180, 180);
        display: none;
        justify-content: space-between;
        align-items: center;
      }
      .tg {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
      }
      .table-header {
        border: 1px solid #000;
        overflow: hidden;
        padding: 8.5px 10px;
        word-break: normal;
        background-color: #ebebeb;
        color: #000;
        font-size: inherit;
        font-weight: bold;
        text-align: center;
        vertical-align: middle;
      }
      .table-data {
        border: 1px solid #000;
        overflow: hidden;
        padding: 8px;
        word-break: normal;
        background-color: #fff;
        color: #000;
        font-size: inherit;
        font-weight: bold;
        text-align: center;
        vertical-align: middle;
      }
      .table-data-flex {
        display: flex;
        justify-content: center;
        align-items: cter;
        gap: 20px;
      }
      .bi-check2 {
        font-size: 25px;
      }
      .bi-x {
        font-size: 28px;
      }
      .employees-signs,
      .make-date {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
      .sign-container,
      .make-date-container {
        width: 33.33%;
        text-align: center;
      }
      .sign-title,
      .make-date-title {
        text-decoration: underline;
        padding-bottom: 15px;
      }
      @media print {
        html {
          font-size: 15px;
        }
        body {
          padding: 0 50px;
        }
        .print-button {
          display: none;
        }
        #ALERT_BOX {
          display: none;
        }
        .page_head {
          display: flex;
        }
      }
    </style>
  </head>
  <body>
    <div id="ALERT_BOX" class="hide">
      <div class="flex items-center justify-center">
        <p id="ALERT_BOX_TEXT"></p>
      </div>
    </div>
    <div class="print-button">
      <button onclick="window.close()" title="Exit">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>
    <main>
      <div class="page_head">
        <img
          width="100px"
          src="https://alsourayia.com/images/thumbs/0000531.png"
          alt="شركة السريع التجارية للأرضيات والمفروشات"
        />
        <div></div>
      </div>
      <h2 class="index-title">فهرس مستندات فتح حساب</h2>
      <div>
        <table class="tg">
          <thead>
            <tr>
              <th class="table-header" style="width: 20%">رقم العميل</th>
              <th class="table-header" style="width: 50%">إسم العميل</th>
              <th class="table-header" style="width: 30%">
                قيمة الحد الإئتماني
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="table-data">${CUST_NO.value}</td>
              <td class="table-data">
                ${custNameAll.textContent
                  .replace("(", " ")
                  .replace(")", "")
                  .trim()
                  .replace(/\s+/g, " ")}
              </td>
              <td class="table-data">
                ${CUST_CREDIT_LIMIT.value} ${CUST_CREDIT_LIMIT_CURRENCY.value}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <div>
        <table class="tg">
          <thead>
            <tr>
              <th class="table-header" style="width: 10%">م</th>
              <th class="table-header" style="width: 50%">
                المستنــــــــــــــد
              </th>
              <th class="table-header" style="width: 40%">
                الحالــــــــــــــة ( موجود - غير موجود )
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="table-header">1</td>
              <td class="table-data">ملف طلب تسهيلات</td>
              <td class="table-data">
                <div class="table-data-flex">
                  ${
                    TASHEEL_APP_CHECK[0].checked
                      ? trueMark + TASHEEL_APP_VERFIY.value
                      : falseMark
                  }
                </div>
              </td>
            </tr>
            <tr>
              <td class="table-header">2</td>
              <td class="table-data">أصل سند لأمر</td>
              <td class="table-data">
                <div class="table-data-flex">
                  ${
                    WARRANT_SUPPORT_CHECK[0].checked
                      ? trueMark + WARRANT_SUPPORT_VERFIY.value
                      : falseMark
                  }
                </div>
              </td>
            </tr>
            <tr>
              <td class="table-header">3</td>
              <td class="table-data">السجل التجاري</td>
              <td class="table-data">
                ${CUST_TRADE_LOG_CHECK[0].checked ? trueMark : falseMark}
              </td>
            </tr>
            <tr>
              <td class="table-header">4</td>
              <td class="table-data">شهادة التسجيل في ضريبة القيمة المضافة</td>
              <td class="table-data">
                ${VAT_CERT_CHECK[0].checked ? trueMark : falseMark}
              </td>
            </tr>
            <tr>
              <td class="table-header">5</td>
              <td class="table-data">هوية سعودي</td>
              <td class="table-data">
                ${NATIONAL_ID_CHECK[0].checked ? trueMark : falseMark}
              </td>
            </tr>
            <tr>
              <td class="table-header">6</td>
              <td class="table-data">هوية أجنبي</td>
              <td class="table-data">
                ${FORIGN_ID_CHECK[0].checked ? trueMark : falseMark}
              </td>
            </tr>
            <tr>
              <td class="table-header">7</td>
              <td class="table-data">إقرار نقل رصيد</td>
              <td class="table-data">
                ${MOVE_CREDIT_CHECK[0].checked ? trueMark : falseMark}
              </td>
            </tr>
            <tr>
              <td class="table-header">8</td>
              <td class="table-data">إثبات وكالة</td>
              <td class="table-data">
                ${CUST_ATTORNEY_CHECK[0].checked ? trueMark : falseMark}
              </td>
            </tr>
            <tr>
              <td class="table-header">9</td>
              <td class="table-data">رخصة نشاط تجاري</td>
              <td class="table-data">
                ${CUST_LICENSE_CHECK[0].checked ? trueMark : falseMark}
              </td>
            </tr>
            <tr>
              <td class="table-header">10</td>
              <td class="table-data">عنوان وطني</td>
              <td class="table-data">
                ${NATIONAL_ADDRESS_CHECK[0].checked ? trueMark : falseMark}
              </td>
            </tr>
            <tr>
              <td class="table-header">11</td>
              <td class="table-data">تاريخ إنتهاء السجل التجاري</td>
              <td class="table-data">
                ${CUST_TRADE_DATE_DAY.value} / ${CUST_TRADE_DATE_MONTH.value} /
                ${CUST_TRADE_DATE_YEAR.value} هـ
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <div class="employees-signs">
        <div class="sign-container">
          <div class="sign-title">إعداد :</div>
          <div class="sign-name">${MAKE_EMPLOYEE_NAME.value}</div>
        </div>
        <div class="sign-container">
          <div class="sign-title">مراجعة :</div>
          <div class="sign-name">${REVIEW_EMPLOYEE_NAME.value}</div>
        </div>
        <div class="sign-container">
          <div class="sign-title">تسجيل في النظام الآلي :</div>
          <div class="sign-name">${REGIST_EMPLOYEE_NAME.value}</div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div class="make-date">
        <div class="make-date-container">
          <div class="make-date-title">تاريخ الإعداد :</div>
          <div class="make-date-value">
            ${MAKE_DATE_DAY.value} / ${MAKE_DATE_MONTH.value} /
            ${MAKE_DATE_YEAR.value} م
          </div>
        </div>
        <div class="make-date-container"></div>
        <div class="make-date-container"></div>
      </div>
    </main>
    <script>
      ALERT_BOX.textContent = "تم معالجة البيانات بنجاح، جار الطباعة ...";
      ALERT_BOX.style.backgroundColor = "rgb(164, 243, 200)";
      ALERT_BOX.style.border = "1px solid rgb(84, 182, 97)";
      ALERT_BOX.classList.remove("hide");
      setTimeout(function () {
        ALERT_BOX.style.backgroundColor = "none";
        ALERT_BOX.style.border = "none";
        ALERT_BOX.classList.add("hide");
      }, 2800);
    </script>
  </body>
</html>
`;
  //==========================================//

  // check if all inputs are filled
  if (
    CUST_NAME.value !== "" &&
    CUST_CREDIT_LIMIT.value !== "" &&
    CUST_NO.value !== "" &&
    CUST_TRADE_DATE_DAY.value !== "" &&
    CUST_TRADE_DATE_MONTH.value !== "" &&
    CUST_TRADE_DATE_YEAR.value !== "" &&
    MAKE_DATE_DAY.value !== "" &&
    MAKE_DATE_MONTH.value !== "" &&
    MAKE_DATE_YEAR.value !== "" &&
    MAKE_EMPLOYEE_NAME.value !== "" &&
    REVIEW_EMPLOYEE_NAME.value !== "" &&
    REGIST_EMPLOYEE_NAME.value !== ""
  ) {
    // show loading window for 1500 s:
    document.querySelector("#LOADING_WIN").classList.remove("hide");
    document.querySelector("#LOADING_WIN_LAYOUT").classList.remove("hide");
    setTimeout(() => {
      document.querySelector("#LOADING_WIN").classList.add("hide");
      document.querySelector("#LOADING_WIN_LAYOUT").classList.add("hide");
    }, 1200);
    // open the result window:
    setTimeout(() => {
      resWin = window.open("", "", "fullscreen=no");
      resWin.document.write(INDEX_RESULT_PAGE);
    }, 1201);
    setTimeout(() => {
      resWin.print();
    }, 3100);
  } else {
    ALERT_BOX.textContent = "تأكد من إدخال البيانات بشكل صحيح!";
    ALERT_BOX.style.backgroundColor = "rgb(243, 164, 164)";
    ALERT_BOX.style.border = "1px solid rgb(182, 84, 84)";
    ALERT_BOX.classList.remove("hide");
    setTimeout(function () {
      ALERT_BOX.style.backgroundColor = "none";
      ALERT_BOX.style.border = "none";
      ALERT_BOX.classList.add("hide");
    }, 2000);
  }
});

// `
// ${CHECK_CUST_SAVED[0].checked ? trueMark : falseMark}
// `;
// ``;
// `${MAKE_DATE_DAY} / ${MAKE_DATE_MONTH} / ${MAKE_DATE_YEAR} م`;
