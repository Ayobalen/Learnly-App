"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtpTemplate = exports.registrationCodeTemplate = void 0;
function registrationCodeTemplate(first_name, code) {
    return `<!DOCTYPE html> <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Static Template</title>

    <style>
      /* * {
        border: 1px solid red;
      } */
      .body {
        font-family: sans-serif;
        max-width: 600px;
        min-width: 375px;
        padding: 30px 60px;
        margin: 0 auto;
      }
      .logo {
        margin-left: auto;
        margin-right: auto;
        display: inline-block;
        width: 150px;
      }
      .content {
        min-height: 200px;
        padding-top: 50px;
        padding-bottom: 50px;
        font-size: 12px;
        color: #374b58;
      }

      .follow-us {
        color: #374b58;
        font-size: 11px;
        font-weight: 700px;
      }
      .copyright-text {
        text-align: center;
        color: #006be5;
        font-weight: 600;
        font-size: 10px;
      }
      .footer-text {
        text-align: left;
        color: #374b58;
        font-size: 10px;
        font-weight: 400px;
      }
      .unsubscribe-text {
        display: inline-block;
        padding-top: 20px;
        padding-bottom: 20px;
        color: #006be5;
        font-size: 11px;
        text-decoration: underline;
        font-weight: 600;
      }
      .follow-table {
        margin: 0 auto;
        border-spacing: 10px;
      }
    </style>
  </head>
  <body>
    <table class="body">
      <tr class="" align="center">
        <td>
         <!-- <img src="" alt="logo"> -->
        </td>
      </tr>
      <tr>
        <td>
          <div class="content">
            <p>Welcome ${first_name},</p>
             <br>
             <p>Thanks for signing up. Choosing Legum please use this code to activate your account ${code}
             </p>
             <p> 
                 &mdash; Cheers!<br>  
                 The Legum Team
              </p>
          </div>
        </td>
      </tr>
      <tr>
        <td>
    <!--      <table class="footer">
            <tr>
              <td class="copyright-text">
                Copyright (c) 2023 Roppi.
              </td>
            </tr>
            <tr align="center">
            <table class="follow-table">
                <tr>
                  <td>Follow us:</td>
                  <td>
                    <a href="">
                       <img src="" alt="facebook">
                    </a>
                  </td>
                  <td>
                    <a href="">
                    <img src="" alt="twitter">
                    </a>
                  </td>
                  <td>
                    <a href="">
                    <img src="" alt="instagram">
                    </a>
                  </td>
                </tr>
              </table>
            </tr>
            <tr>
              <td class="footer-text">
                You've received this email because you created an account with
                us and are signed up to receive email updates from Roppi
              </td>
            </tr>
            <tr>
              <td class="footer-text" style="padding-top: 8px;">
                Update your email preferences to choose what types of emails you
                receive
              </td>
            </tr>
            <tr>
              <td style="text-align: center;">
                <a class="unsubscribe-text">
                  Unsubscribe from all marketing emails
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table> -->
  </body>
</html>`;
}
exports.registrationCodeTemplate = registrationCodeTemplate;
function OtpTemplate(first_name, code) {
    return `<!DOCTYPE html> <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Static Template</title>

    <style>
      /* * {
        border: 1px solid red;
      } */
      .body {
        font-family: sans-serif;
        max-width: 600px;
        min-width: 375px;
        padding: 30px 60px;
        margin: 0 auto;
      }
      .logo {
        margin-left: auto;
        margin-right: auto;
        display: inline-block;
        width: 150px;
      }
      .content {
        min-height: 200px;
        padding-top: 50px;
        padding-bottom: 50px;
        font-size: 12px;
        color: #374b58;
      }

      .follow-us {
        color: #374b58;
        font-size: 11px;
        font-weight: 700px;
      }
      .copyright-text {
        text-align: center;
        color: #006be5;
        font-weight: 600;
        font-size: 10px;
      }
      .footer-text {
        text-align: left;
        color: #374b58;
        font-size: 10px;
        font-weight: 400px;
      }
      .unsubscribe-text {
        display: inline-block;
        padding-top: 20px;
        padding-bottom: 20px;
        color: #006be5;
        font-size: 11px;
        text-decoration: underline;
        font-weight: 600;
      }
      .follow-table {
        margin: 0 auto;
        border-spacing: 10px;
      }
    </style>
  </head>
  <body>
    <table class="body">
      <tr class="" align="center">
        <td>
         <!-- <img src="" alt="logo"> -->
        </td>
      </tr>
      <tr>
        <td>
          <div class="content">
            <p>Welcome ${first_name},</p>
             <br>
             <p> Please use the following One-Time Pasword (OTP) for verification and please do not share with anyone ${code}
             </p>
             <p> 
                 &mdash; Cheers!<br>  
                 The Legum Team
              </p>
          </div>
        </td>
      </tr>
      <tr>
        <td>
    <!--      <table class="footer">
            <tr>
              <td class="copyright-text">
                Copyright (c) 2023 Roppi.
              </td>
            </tr>
            <tr align="center">
            <table class="follow-table">
                <tr>
                  <td>Follow us:</td>
                  <td>
                    <a href="">
                       <img src="" alt="facebook">
                    </a>
                  </td>
                  <td>
                    <a href="">
                    <img src="" alt="twitter">
                    </a>
                  </td>
                  <td>
                    <a href="">
                    <img src="" alt="instagram">
                    </a>
                  </td>
                </tr>
              </table>
            </tr>
            <tr>
              <td class="footer-text">
                You've received this email because you created an account with
                us and are signed up to receive email updates from Legum
              </td>
            </tr>
            <tr>
              <td class="footer-text" style="padding-top: 8px;">
                Update your email preferences to choose what types of emails you
                receive
              </td>
            </tr>
            <tr>
              <td style="text-align: center;">
                <a class="unsubscribe-text">
                  Unsubscribe from all marketing emails
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table> -->
  </body>
</html>`;
}
exports.OtpTemplate = OtpTemplate;
//# sourceMappingURL=user.registration.js.map