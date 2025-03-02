exports.VerifyEmailHtml = (_user, _host) => {
  return `
  <a
  href="http://${_host}/users/verify-email?token=${_user.emailToken}"
  target="_blank"
  style="
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    color: #4a4a4a !important;
    display: block;
    font-family: Arial, sans-serif;
    font-size: 13px;
    font-weight: bold;
    text-decoration: none;
  "
  >Click here</a>
  to verify Your Email
  `;
  //   `
  //   <!DOCTYPE html>
  // <html
  //   xmlns="http://www.w3.org/1999/xhtml"
  //   xmlns:v="urn:schemas-microsoft-com:vml"
  //   xmlns:o="urn:schemas-microsoft-com:office:office"
  // >
  //   <head>
  //     <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //     <title>ShipMarket</title>
  //     <link
  //       href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
  //       rel="stylesheet"
  //     />
  //     <style>
  //       body {
  //         height: 100% !important;
  //         margin: 0;
  //         padding: 0;
  //         width: 100% !important;
  //       }
  //       img {
  //         border: 0;
  //         outline: none;
  //         text-decoration: none;
  //       }
  //       img {
  //         width: auto;
  //         max-width: 100%;
  //         display: block;
  //       }
  //       a:hover {
  //         color: #009999 !important;
  //       }
  //       a:active {
  //         color: #009999 !important;
  //       }
  //       a:visited {
  //         color: #009999 !important;
  //       }
  //       .ReadMsgBody {
  //         width: 100%;
  //       }
  //       .ExternalClass {
  //         width: 100%;
  //       }
  //       img {
  //         -ms-interpolation-mode: bicubic;
  //       }
  //       body {
  //         -ms-text-size-adjust: 100%;
  //         -webkit-text-size-adjust: 100%;
  //       }
  //       body {
  //         font-family: Arial, sans-serif;
  //         font-size: 16px;
  //         font-weight: normal;
  //         line-height: 24px;
  //         color: #4a4a4a;
  //       }
  //       body {
  //         background-color: #f4f4f4;
  //       }
  //       .btn a:hover {
  //         color: #fff !important;
  //       }
  //       .btn a:active {
  //         color: #fff !important;
  //       }
  //       .btn a:visited {
  //         color: #fff !important;
  //       }
  //       @media only screen and (max-width: 600px) {
  //         body {
  //           width: 100% !important;
  //           min-width: 100% !important;
  //           background-color: #ffffff !important;
  //         }
  //       }
  //       @media only screen and (max-width: 600px) {
  //         body {
  //           -webkit-text-size-adjust: none !important;
  //         }
  //       }
  //       @media only screen and (max-width: 600px) {
  //         table {
  //           -webkit-text-size-adjust: none !important;
  //         }
  //       }
  //       @media only screen and (max-width: 600px) {
  //         td {
  //           -webkit-text-size-adjust: none !important;
  //         }
  //       }
  //       @media only screen and (max-width: 600px) {
  //         p {
  //           -webkit-text-size-adjust: none !important;
  //         }
  //       }
  //       @media only screen and (max-width: 600px) {
  //         a {
  //           -webkit-text-size-adjust: none !important;
  //         }
  //       }
  //       @media only screen and (max-width: 600px) {
  //         li {
  //           -webkit-text-size-adjust: none !important;
  //         }
  //       }
  //       @media only screen and (max-width: 600px) {
  //         blockquote {
  //           -webkit-text-size-adjust: none !important;
  //         }
  //       }
  //       @media only screen and (max-width: 600px) {
  //         table {
  //           max-width: 580px !important;
  //           width: 100% !important;
  //         }
  //       }
  //       @media only screen and (max-width: 600px) {
  //         #bodyTable {
  //           background-color: #ffffff !important;
  //         }
  //       }
  //       @media only screen and (max-width: 600px) {
  //         #bodyCell {
  //           padding: 0 !important;
  //         }
  //       }
  //       @media only screen and (max-width: 600px) {
  //         .column {
  //           display: block !important;
  //           width: 100% !important;
  //           padding: 0 0 15px !important;
  //           box-sizing: border-box;
  //         }
  //       }
  //       @media only screen and (max-width: 600px) {
  //         .column-22 {
  //           display: block !important;
  //           width: 100% !important;
  //           padding: 0 0 15px !important;
  //           box-sizing: border-box;
  //         }
  //       }
  //       @media only screen and (max-width: 600px) {
  //         .column-65 {
  //           display: block !important;
  //           width: 100% !important;
  //           padding: 0 0 15px !important;
  //           box-sizing: border-box;
  //         }
  //       }
  //       @media only screen and (max-width: 600px) {
  //         .column-78 {
  //           display: block !important;
  //           width: 100% !important;
  //           padding: 0 0 15px !important;
  //           box-sizing: border-box;
  //         }
  //       }
  //       @media only screen and (max-width: 600px) {
  //         .column-25 {
  //           display: block !important;
  //           width: 100% !important;
  //           padding: 0 0 15px !important;
  //           box-sizing: border-box;
  //         }
  //       }
  //       @media only screen and (max-width: 600px) {
  //         .column-50 {
  //           display: block !important;
  //           width: 100% !important;
  //           padding: 0 0 15px !important;
  //           box-sizing: border-box;
  //         }
  //       }
  //       @media only screen and (max-width: 600px) {
  //         .column:last-child {
  //           padding-bottom: 0 !important;
  //         }
  //       }
  //       @media only screen and (max-width: 600px) {
  //         .column-22:last-child {
  //           padding-bottom: 0 !important;
  //         }
  //       }
  //       @media only screen and (max-width: 600px) {
  //         .column-65:last-child {
  //           padding-bottom: 0 !important;
  //         }
  //       }
  //       @media only screen and (max-width: 600px) {
  //         .column-78:last-child {
  //           padding-bottom: 0 !important;
  //         }
  //       }
  //       @media only screen and (max-width: 600px) {
  //         .column-25:last-child {
  //           padding-bottom: 0 !important;
  //         }
  //       }
  //       @media only screen and (max-width: 600px) {
  //         .column-50:last-child {
  //           padding-bottom: 0 !important;
  //         }
  //       }
  //       @media only screen and (max-width: 600px) {
  //         .header-logo {
  //           padding: 15px !important;
  //         }
  //       }
  //       @media only screen and (max-width: 600px) {
  //         .header {
  //           padding: 20px !important;
  //           border-radius: 0 !important;
  //         }
  //       }
  //       @media only screen and (max-width: 600px) {
  //         .section {
  //           padding: 20px !important;
  //           border-radius: 0 !important;
  //         }
  //       }
  //       @media only screen and (max-width: 600px) {
  //         .header {
  //           background: #3f3d55 !important;
  //         }
  //       }
  //       @media only screen and (max-width: 600px) {
  //         .product-block {
  //           background: #04158e !important;
  //         }
  //       }
  //       @media only screen and (max-width: 600px) {
  //         .footer .icon-text {
  //           display: none !important;
  //         }
  //       }
  //       @media only screen and (max-width: 600px) {
  //         .is-fittogrid {
  //           width: 100% !important;
  //           height: auto !important;
  //         }
  //       }
  //       @media only screen and (max-width: 600px) {
  //         .mobile-centered-container {
  //           text-align: center !important;
  //         }
  //       }
  //       @media only screen and (max-width: 600px) {
  //         .mobile-centered-item {
  //           display: inline-block !important;
  //         }
  //       }
  //     </style>
  //   </head>
  //   <body
  //     style="
  //       -ms-text-size-adjust: 100%;
  //       -webkit-text-size-adjust: 100%;
  //       background: #f4f4f4;
  //       color: #4a4a4a;
  //       font-family: Arial, sans-serif;
  //       font-size: 16px;
  //       font-weight: normal;
  //       height: 100% !important;
  //       line-height: 24px;
  //       margin: 0;
  //       padding: 0;
  //       width: 100% !important;
  //     "
  //     bgcolor="#f4f4f4"
  //   >
  //     <center>
  //       <table
  //         border="0"
  //         cellpadding="0"
  //         cellspacing="0"
  //         width="100%"
  //         id="bodyTable"
  //         style="
  //           height: 100% !important;
  //           -ms-text-size-adjust: 100%;
  //           -webkit-text-size-adjust: 100%;
  //           background: #f4f4f4;
  //           border-collapse: collapse;
  //           color: #4a4a4a;
  //           font-family: Arial, sans-serif;
  //           font-size: 16px;
  //           font-weight: normal;
  //           line-height: 24px;
  //           margin: 0;
  //           mso-table-lspace: 0pt;
  //           mso-table-rspace: 0pt;
  //           padding: 0;
  //           width: 100% !important;
  //         "
  //         bgcolor="#f4f4f4"
  //       >
  //         <tbody>
  //           <tr>
  //             <td
  //               align="center"
  //               valign="top"
  //               id="bodyCell"
  //               style="
  //                 -ms-text-size-adjust: 100%;
  //                 -webkit-text-size-adjust: 100%;
  //                 height: 100% !important;
  //                 margin: 0;
  //                 mso-table-lspace: 0pt;
  //                 mso-table-rspace: 0pt;
  //                 padding: 20px;
  //                 width: 100% !important;
  //               "
  //             >
  //               <!-- // BEGIN EMAIL -->
  //               <table
  //                 border="0"
  //                 cellpadding="0"
  //                 cellspacing="0"
  //                 width="560"
  //                 class="main"
  //                 style="
  //                   -ms-text-size-adjust: 100%;
  //                   -webkit-text-size-adjust: 100%;
  //                   border-collapse: collapse;
  //                   mso-table-lspace: 0pt;
  //                   mso-table-rspace: 0pt;
  //                 "
  //               >
  //                 <tbody>
  //                   <!-- // OUTSIDE LOGO -->
  //                   <tr>
  //                     <td
  //                       align="center"
  //                       valign="top"
  //                       class="header-logo"
  //                       style="
  //                         -ms-text-size-adjust: 100%;
  //                         -webkit-text-size-adjust: 100%;
  //                         mso-table-lspace: 0pt;
  //                         mso-table-rspace: 0pt;
  //                         padding: 10px 50px 30px;
  //                       "
  //                     >
  //                       <!-- // Logo block // -->
  //                       <a
  //                         href="//mailtrap.io"
  //                         target="_blank"
  //                         style="
  //                           -ms-text-size-adjust: 100%;
  //                           -webkit-text-size-adjust: 100%;
  //                           color: #000000;
  //                           text-decoration: none;
  //                         "
  //                         ><h2
  //                           style="
  //                             font-family: 'Lobster', cursive;
  //                             text-decoration: none;
  //                             color: black;
  //                           "
  //                         >
  //                           ShipMarket
  //                         </h2></a
  //                       >
  //                     </td>
  //                   </tr>
  //                   <tr>
  //                     <td
  //                       align="left"
  //                       valign="top"
  //                       class="header"
  //                       style="
  //                         -ms-text-size-adjust: 100%;
  //                         -webkit-text-size-adjust: 100%;
  //                         background: #3f3d55
  //                           url('https://link-to-another-hosted-image.png')
  //                           repeat-y top;
  //                         background-size: 560px 150px;
  //                         border-radius: 5px 5px 0 0;
  //                         mso-table-lspace: 0pt;
  //                         mso-table-rspace: 0pt;
  //                         padding: 28px 130px;
  //                       "
  //                       bgcolor="#3F3D55"
  //                     >
  //                       <!-- // Header block // -->
  //                       <table
  //                         border="0"
  //                         cellpadding="0"
  //                         cellspacing="0"
  //                         width="100%"
  //                         style="
  //                           -ms-text-size-adjust: 100%;
  //                           -webkit-text-size-adjust: 100%;
  //                           border-collapse: collapse;
  //                           mso-table-lspace: 0pt;
  //                           mso-table-rspace: 0pt;
  //                         "
  //                       >
  //                         <tbody>
  //                           <tr>
  //                             <td
  //                               align="center"
  //                               valign="middle"
  //                               class="mobile-centered-container"
  //                               style="
  //                                 -ms-text-size-adjust: 100%;
  //                                 -webkit-text-size-adjust: 100%;
  //                                 mso-table-lspace: 0pt;
  //                                 mso-table-rspace: 0pt;
  //                               "
  //                             >
  //                               <h1
  //                                 class="header-heading mobile-centered-item"
  //                                 style="
  //                                   color: #fff;
  //                                   font-size: 24px;
  //                                   letter-spacing: -0.43px;
  //                                   line-height: 30px;
  //                                   margin: 0;
  //                                   padding: 0 0 20px;
  //                                 "
  //                               >
  //                                 Hello ${_user.name} Thanks for signing up 🎉
  //                               </h1>
  //                             </td>
  //                           </tr>
  //                         </tbody>
  //                       </table>
  //                     </td>
  //                   </tr>
  //                   <tr>
  //                     <td
  //                       align="left"
  //                       valign="top"
  //                       class="section is-top-merged"
  //                       style="
  //                         -ms-text-size-adjust: 100%;
  //                         -webkit-text-size-adjust: 100%;
  //                         background: #fff;
  //                         border-radius: 0 0 5px 5px;
  //                         mso-table-lspace: 0pt;
  //                         mso-table-rspace: 0pt;
  //                         padding: 20px 50px 40px;
  //                       "
  //                       bgcolor="#ffffff"
  //                     >
  //                       <!-- Content section -->
  //                       <table
  //                         border="0"
  //                         cellpadding="0"
  //                         cellspacing="0"
  //                         width="100%"
  //                         style="
  //                           -ms-text-size-adjust: 100%;
  //                           -webkit-text-size-adjust: 100%;
  //                           border-collapse: collapse;
  //                           mso-table-lspace: 0pt;
  //                           mso-table-rspace: 0pt;
  //                         "
  //                       >
  //                         <tbody>

  //                           <tr>
  //                             <td
  //                               align="left"
  //                               valign="top"
  //                               class="content-item"
  //                               style="
  //                                 -ms-text-size-adjust: 100%;
  //                                 -webkit-text-size-adjust: 100%;
  //                                 mso-table-lspace: 0pt;
  //                                 mso-table-rspace: 0pt;
  //                                 padding-bottom: 25px;
  //                               "
  //                             >
  //                               <p
  //                                 style="
  //                                   -ms-text-size-adjust: 100%;
  //                                   -webkit-text-size-adjust: 100%;
  //                                   margin: 0;
  //                                 "
  //                               >
  //                               Thank you for Register to ShipMarket Please verufy your mail to continue
  //                               </p>
  //                             </td>
  //                           </tr>
  //                         </tbody>
  //                       </table>
  //                       <table
  //                         border="0"
  //                         cellpadding="0"
  //                         cellspacing="0"
  //                         align="center"
  //                         class="btn"
  //                         style="
  //                           -ms-text-size-adjust: 100%;
  //                           -webkit-text-size-adjust: 100%;
  //                           border-collapse: separate;
  //                           mso-table-lspace: 0pt;
  //                           mso-table-rspace: 0pt;
  //                         "
  //                       >
  //                         <tbody>
  //                           <tr>
  //                             <td
  //                               align="center"
  //                               valign="middle"
  //                               class="btn-content"
  //                               style="
  //                                 -ms-text-size-adjust: 100%;
  //                                 -webkit-text-size-adjust: 100%;
  //                                 background: #ac92c5;
  //                                 border: 2px solid #4a4a4a;
  //                                 border-radius: 30px;
  //                                 color: #fff;
  //                                 mso-table-lspace: 0pt;
  //                                 mso-table-rspace: 0pt;
  //                                 padding: 4px 20px;
  //                               "
  //                               bgcolor="#A2F4DF"
  //                             >
  //                               <a
  //                                 href="http://${_host}/users/verify-email?token=${_user.emailToken}"
  //                                 target="_blank"
  //                                 style="
  //                                   -ms-text-size-adjust: 100%;
  //                                   -webkit-text-size-adjust: 100%;
  //                                   color: #4a4a4a !important;
  //                                   display: block;
  //                                   font-family: Arial, sans-serif;
  //                                   font-size: 13px;
  //                                   font-weight: bold;
  //                                   text-decoration: none;
  //                                 "
  //                                 >Verify Your Email</a
  //                               >
  //                             </td>
  //                           </tr>
  //                         </tbody>
  //                       </table>
  //                     </td>
  //                   </tr>
  //                   <tr>
  //                     <!-- Section separator -->
  //                     <td
  //                       align="left"
  //                       valign="top"
  //                       class="section-spacer"
  //                       style="
  //                         -ms-text-size-adjust: 100%;
  //                         -webkit-text-size-adjust: 100%;
  //                         mso-table-lspace: 0pt;
  //                         mso-table-rspace: 0pt;
  //                         padding: 15px;
  //                       "
  //                     ></td>
  //                   </tr>
  //                   <tr>
  //                     <td
  //                       align="left"
  //                       valign="top"
  //                       class="section"
  //                       style="
  //                         -ms-text-size-adjust: 100%;
  //                         -webkit-text-size-adjust: 100%;
  //                         border-radius: 0 0 5px 5px;
  //                         color: #4a4a4a;
  //                         mso-table-lspace: 0pt;
  //                         mso-table-rspace: 0pt;
  //                         padding: 40px 50px;
  //                         background: #ffffff
  //                           url('https://marketing-image-production.s3.amazonaws.com/uploads/3978505229776794b53cf3f883690e124e7bb6857cfeec1fc679571a5fa2bdb63fd540dc5ae7d3e63ee0391d80feb0d0494b7b6e16d987fcc9354a58e57ea6e3.png')
  //                           no-repeat top;
  //                         background-size: 560px 4px;
  //                       "
  //                       bgcolor="#ffffff"
  //                     >
  //                       <!-- Own products block -->
  //                       <table
  //                         border="0"
  //                         cellpadding="0"
  //                         cellspacing="0"
  //                         width="100%"
  //                         style="
  //                           -ms-text-size-adjust: 100%;
  //                           -webkit-text-size-adjust: 100%;
  //                           border-collapse: collapse;
  //                           mso-table-lspace: 0pt;
  //                           mso-table-rspace: 0pt;
  //                         "
  //                       >
  //                         <tbody>
  //                           <tr>
  //                             <!-- Footer -->
  //                             <td
  //                               align="center"
  //                               valign="top"
  //                               class="footer"
  //                               style="
  //                                 -ms-text-size-adjust: 100%;
  //                                 -webkit-text-size-adjust: 100%;
  //                                 mso-table-lspace: 0pt;
  //                                 mso-table-rspace: 0pt;
  //                                 padding-top: 20px;
  //                               "
  //                             >
  //                               <!-- Content block -->
  //                               <table
  //                                 border="0"
  //                                 cellpadding="0"
  //                                 cellspacing="0"
  //                                 width="100%"
  //                                 style="
  //                                   -ms-text-size-adjust: 100%;
  //                                   -webkit-text-size-adjust: 100%;
  //                                   border-collapse: collapse;
  //                                   mso-table-lspace: 0pt;
  //                                   mso-table-rspace: 0pt;
  //                                 "
  //                               >
  //                                 <tbody>
  //                                   <tr>
  //                                     <td
  //                                       align="center"
  //                                       valign="top"
  //                                       class="footer-heading"
  //                                       style="
  //                                         -ms-text-size-adjust: 100%;
  //                                         -webkit-text-size-adjust: 100%;
  //                                         background: url('https://gallery.mailchimp.com/bfdf3c6997809dba3c6682bcf/images/cabdbec1-8813-44da-b186-baec3b4f5bbd.png')
  //                                           repeat-x top;
  //                                         background-size: 20px;
  //                                         mso-table-lspace: 0pt;
  //                                         mso-table-rspace: 0pt;
  //                                         padding-bottom: 25px;
  //                                       "
  //                                     >
  //                                       <h2
  //                                         style="
  //                                           background: #ffffff;
  //                                           color: #4a4a4a;
  //                                           display: inline-block;
  //                                           font-size: 16px;
  //                                           letter-spacing: -0.53px;
  //                                           line-height: 20px;
  //                                           margin: 0;
  //                                           padding: 0 10px;
  //                                         "
  //                                       >
  //                                         Follow Us
  //                                       </h2>
  //                                     </td>
  //                                   </tr>
  //                                   <tr>
  //                                     <td
  //                                       align="center"
  //                                       valign="middle"
  //                                       style="
  //                                         -ms-text-size-adjust: 100%;
  //                                         -webkit-text-size-adjust: 100%;
  //                                         mso-table-lspace: 0pt;
  //                                         mso-table-rspace: 0pt;
  //                                       "
  //                                     >
  //                                       <!-- Grid -->
  //                                       <table
  //                                         border="0"
  //                                         cellpadding="0"
  //                                         cellspacing="0"
  //                                         width="100%"
  //                                         style="
  //                                           -ms-text-size-adjust: 100%;
  //                                           -webkit-text-size-adjust: 100%;
  //                                           border-collapse: collapse;
  //                                           mso-table-lspace: 0pt;
  //                                           mso-table-rspace: 0pt;
  //                                         "
  //                                       >
  //                                         <tbody>
  //                                           <tr>
  //                                             <!-- Column -->
  //                                             <td
  //                                               align="center"
  //                                               valign="middle"
  //                                               class="social-item"
  //                                               style="
  //                                                 -ms-text-size-adjust: 100%;
  //                                                 -webkit-text-size-adjust: 100%;
  //                                                 mso-table-lspace: 0pt;
  //                                                 mso-table-rspace: 0pt;
  //                                               "
  //                                             >
  //                                               <a
  //                                                 href="#"
  //                                                 style="
  //                                                   -ms-text-size-adjust: 100%;
  //                                                   -webkit-text-size-adjust: 100%;
  //                                                   color: #4a4a4a !important;
  //                                                   font-size: 12px;
  //                                                   font-weight: bold;
  //                                                   letter-spacing: -0.5px;
  //                                                   line-height: 14px;
  //                                                   text-decoration: none;
  //                                                 "
  //                                                 target="_blank"
  //                                                 ><img
  //                                                   src="https://marketing-image-production.s3.amazonaws.com/uploads/852b2e2fbd40963c0291f1bec533890a216351ecc0d249726c70327c6dc905c10067a48bef55b977ecf925267dbf3f90d7581684bc04ff15747a89de481375f8.png"
  //                                                   width="36"
  //                                                   height="36"
  //                                                   alt="Facebook Icon"
  //                                                   style="
  //                                                     -ms-interpolation-mode: bicubic;
  //                                                     border: 0;
  //                                                     display: inline-block;
  //                                                     max-width: 100%;
  //                                                     outline: none;
  //                                                     padding-right: 10px;
  //                                                     text-decoration: none;
  //                                                     vertical-align: middle;
  //                                                     width: auto;
  //                                                   "
  //                                                 /><span class="icon-text"
  //                                                   >Facebook</span
  //                                                 ></a
  //                                               >
  //                                             </td>
  //                                             <!-- Column -->
  //                                             <td
  //                                               align="center"
  //                                               valign="middle"
  //                                               class="social-item"
  //                                               style="
  //                                                 -ms-text-size-adjust: 100%;
  //                                                 -webkit-text-size-adjust: 100%;
  //                                                 mso-table-lspace: 0pt;
  //                                                 mso-table-rspace: 0pt;
  //                                               "
  //                                             >
  //                                               <a
  //                                                 href="#"
  //                                                 style="
  //                                                   -ms-text-size-adjust: 100%;
  //                                                   -webkit-text-size-adjust: 100%;
  //                                                   color: #4a4a4a !important;
  //                                                   font-size: 12px;
  //                                                   font-weight: bold;
  //                                                   letter-spacing: -0.5px;
  //                                                   line-height: 14px;
  //                                                   text-decoration: none;
  //                                                 "
  //                                                 target="_blank"
  //                                                 ><img
  //                                                   src="https://marketing-image-production.s3.amazonaws.com/uploads/a95362838b314d3f2d265bf994034ff288b4ad533f14d369b4ce8b729aede1f0b340dc844034ba1ed758d0559fcbad36658abfddc4e0e2405c42fb719bd96973.png"
  //                                                   width="36"
  //                                                   height="36"
  //                                                   alt="Twitter Icon"
  //                                                   style="
  //                                                     -ms-interpolation-mode: bicubic;
  //                                                     border: 0;
  //                                                     display: inline-block;
  //                                                     max-width: 100%;
  //                                                     outline: none;
  //                                                     padding-right: 10px;
  //                                                     text-decoration: none;
  //                                                     vertical-align: middle;
  //                                                     width: auto;
  //                                                   "
  //                                                 /><span class="icon-text"
  //                                                   >Twitter</span
  //                                                 ></a
  //                                               >
  //                                             </td>
  //                                             <!-- Column -->
  //                                             <td
  //                                               align="center"
  //                                               valign="middle"
  //                                               class="social-item"
  //                                               style="
  //                                                 -ms-text-size-adjust: 100%;
  //                                                 -webkit-text-size-adjust: 100%;
  //                                                 mso-table-lspace: 0pt;
  //                                                 mso-table-rspace: 0pt;
  //                                               "
  //                                             >
  //                                               <a
  //                                                 href="#"
  //                                                 style="
  //                                                   -ms-text-size-adjust: 100%;
  //                                                   -webkit-text-size-adjust: 100%;
  //                                                   color: #4a4a4a !important;
  //                                                   font-size: 12px;
  //                                                   font-weight: bold;
  //                                                   letter-spacing: -0.5px;
  //                                                   line-height: 14px;
  //                                                   text-decoration: none;
  //                                                 "
  //                                                 target="_blank"
  //                                                 ><img
  //                                                   src="https://marketing-image-production.s3.amazonaws.com/uploads/326bb956e1b0f02a26affd9a584119d9838c39cf04d1c28b07569c28c6532b4a94b46961b9306b80d4e68e12007f6628f8f1797379c40869ec629862dee38d9d.png"
  //                                                   width="36"
  //                                                   height="36"
  //                                                   alt="Twitter Icon"
  //                                                   style="
  //                                                     -ms-interpolation-mode: bicubic;
  //                                                     border: 0;
  //                                                     display: inline-block;
  //                                                     max-width: 100%;
  //                                                     outline: none;
  //                                                     padding-right: 10px;
  //                                                     text-decoration: none;
  //                                                     vertical-align: middle;
  //                                                     width: auto;
  //                                                   "
  //                                                 /><span class="icon-text"
  //                                                   >Linked In</span
  //                                                 ></a
  //                                               >
  //                                             </td>
  //                                           </tr>
  //                                         </tbody>
  //                                       </table>
  //                                     </td>
  //                                   </tr>
  //                                 </tbody>
  //                               </table>
  //                             </td>
  //                           </tr>
  //                         </tbody>
  //                       </table>
  //                     </td>
  //                   </tr>
  //                 </tbody>
  //               </table>
  //               <!-- END EMAIL // -->
  //             </td>
  //           </tr>
  //         </tbody>
  //       </table>
  //     </center>
  //   </body>
  // </html>
  //   `;
};
