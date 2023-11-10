$(document).ready(function () {
    //call the modal
    var show = 0;
    var shown = 0;

    $('#togglecollapse').click(function () {
        if (show === 0) {
            $('#themessage').slideDown('slow');
            show = 1;
        } else {
            $('#themessage').slideUp('slow');
            show = 0;
        }
    });

    $('#togglemainnotification').click(function () {
        if (shown === 0) {
            $('#mainnotification').slideUp('slow');
            $('#text_noti').html('EXPAND');
            shown = 1;
        } else {
            $('#mainnotification').slideDown('slow');
            $('#text_noti').html('COLLAPSE');
            shown = 0;
        }
    });

    $('#themessage').hide();
    $('#showAlertNow').click(function () {

        showAlert("SCHEDULE PAYMENTS", "testing the message testing the message testing the message", "SKIP, I AM OKAY", "OKAY, DO IT!");
    }); 
    function showAlert(title, body, dismisstext, oktext) {

        $('#myModal').modal('show');
        $('#popTitle').html(title);
        $('#popMessage').html(body);
        $('#popOkay').html(oktext);
        $('#popDismiss').html(dismisstext);

    }   //rel='processor.aspx?action=get-cal-ev&val=
    function buildCalendar() {
        $('.loaderImage').show();
        var da = [];

        
        var html = "<table class='table table-striped' style='width:80% !important;font-size:10px !important;margin-top:-15px !important;margin-left:0px !important;'>";

        var dayOfWeek = "<tr style='color:#cccccc !important;'><td>MON</td><td>TUE</td><td>WED</td><td>THU</td><td>FRI</td><td>SAT</td><td>SUN</td></tr>";

        html = html + dayOfWeek;
        $.ajax({
            url: "processor.aspx?action=get-cal-ev",
            type: "GET",
            cache: false,
            success: function (data) {
                da = data;
                var c = JSON.parse(da);


                for (var i = 1; i <= c.length; i++) {
                    var k = i - 1;
                    if (i % 7 === 1) {
                        html = html + "<tr>";
                    }

                    if (c[k].Enabled === false) {
                        html = html + "<td style='color:#cccccc !important;'>" + c[k].DayValue + "</td>";
                    } else {

                        if (c[k].HasEvent === false) {
                            html = html + "<td>" + c[k].DayValue + "</td>";

                        } else {

                            if (c[k].EventCount < 2) {

                                if (c[k].EventValue === 11) {
                                    html = html + "<td><div class='hasevent' style='cursor: pointer;text-align:center !important;background-color:#228B22;/* width:10px !important; */height: 12px !important;border-radius:50% !important;color:#ffffff;-moz-border-radius: 50%;-webkit-border-radius: 50%;/* padding:3px !important; */' rval=" + c[k].DayValue + ">" + c[k].DayValue + "</div></td>";
                                }

                                else {
                                    html = html + "<td><div class='hasevent' style='cursor: pointer;text-align:center !important;background-color:#dd4f05;/* width:10px !important; */height: 12px !important;border-radius:50% !important;color:#ffffff;-moz-border-radius: 50%;-webkit-border-radius: 50%;/* padding:3px !important; */' rval=" + c[k].DayValue + ">" + c[k].DayValue + "</div></td>";

                                }

                            }
                            else {
                                html = html + "<td><div class='hasevent' style='cursor: pointer;text-align:center !important;background-color:#1e90ff;/* width:10px !important; */height: 12px !important;border-radius:50% !important;color:#ffffff;-moz-border-radius: 50%;-webkit-border-radius: 50%;/* padding:3px !important; */' rval=" + c[k].DayValue + ">" + c[k].DayValue + "</div></td>";

                            }

                            
                        }
                        
                        // 228B22   if (c[k].EventValue != 100 && c[k].HasEvent === true)
                        //html = html + "<td><div class='hasevent' style='cursor: pointer;text-align:center !important;background-color:#dd4f05;/* width:10px !important; */height: 12px !important;border-radius:50% !important;color:#ffffff;-moz-border-radius: 50%;-webkit-border-radius: 50%;/* padding:3px !important; */' rval=" + c[k].DayValue + ">" + c[k].DayValue + "</div></td>";
                    }
                    //} else {

                    //    html = html + "<td><div class='hasevent' style='cursor: pointer;text-align:center !important;background-color:#dd4f05;/* width:10px !important; */height: 12px !important;border-radius:50% !important;color:#ffffff;-moz-border-radius: 50%;-webkit-border-radius: 50%;/* padding:3px !important; */' rval=" + c[k].DayValue + ">" + c[k].DayValue + "</div></td>";
                    //   }


                }

                if (i % 7 === 0) {
                    html = html + "</tr>";
                }


                html = html + "</table>";

                $("#cal").html('');
                $("#cal").html(html);
                $('.loaderImage').hide();
            }
        });



    }
    $('#cal').on('click', '.hasevent', function () { 
        var val = $(this).attr('rval');
        // console.log(val);
        // var url = $('urlPath').val();
        var path = location.pathname;
        var pathArray = path.split("/");
        pathArray.splice(pathArray.length-1, 1);//remove the main.aspx
        var newpath = pathArray.join("/");
     //     newpath = newpath.substring(1);
        if (!window.location.origin) {
            window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
        }
        var l = window.location.origin + newpath + "/main.aspx?sm=x_j&a=" + val;
        window.location = l;//+ "/main.aspx?sm=x_j&a=" + val;
      //  showAlert("Event", "You have an event for this day", "Close", "Okay");
    });
     
    buildCalendar();
      
    function hiderIt(a) {
        var id = '#' + a;
        $(id).hide();
    };

    $(".sendMail").click(function (e) {
        e.preventDefault();
        var m = this;
        var name = $(m).closest("tr")   // Finds the closest row <tr>
                              .find("td:nth-child(4)")     // Gets a descendent 
                                  .text().trim();       // Retrieves the text within <td>
        var Nuban = $(m).closest("tr")   // Finds the closest row <tr> 
                               .find("td:nth-child(3)")     // Gets a descendent  
                               .text().trim();         // Retrieves the text within <td>
        var date = $(m).closest("tr")   // Finds the closest row <tr> 
                             .find("td:nth-child(5)")     // Gets a descendent  
                             .text().trim();         // Retrieves the text within <td>
        var email = $(m).closest("tr")   // Finds the closest row <tr> 
                            .find("td:nth-child(6)")     // Gets a descendent  
                            .text().trim();         // Retrieves the text within <td>

     //   window.hdDate.value = date;
      //  window.hdEmail.value = email;


        showEmailAlert('SEND MAIL', name, Nuban);

        //$('#sendMailModal').on('shown.bs.modal', function (e) {

        //    $('#txtCustomerName').val(name);
        //    $('#txtAccount').val(Nuban);
        //    $('#hddate').val(date);
        //});
    });

    $(".sendSms").click(function (e) {
      
        e.preventDefault();
        var m = this;
        var name = $(m).closest("tr")   // Finds the closest row <tr>
                              .find("td:nth-child(4)")     // Gets a descendent 
                                  .text().trim();       // Retrieves the text within <td>
        var Nuban = $(m).closest("tr")   // Finds the closest row <tr> 
                               .find("td:nth-child(3)")     // Gets a descendent  
                               .text().trim();         // Retrieves the text within <td>
        var date = $(m).closest("tr")   // Finds the closest row <tr> 
                             .find("td:nth-child(5)")     // Gets a descendent  
                             .text().trim();         // Retrieves the text within <td>
        var email = $(m).closest("tr")   // Finds the closest row <tr> 
                            .find("td:nth-child(6)")     // Gets a descendent  
                            .text().trim();         // Retrieves the text within <td>
         
        $('#hdDate').val(date);
        //  window.hdEmail.value = email;


        showSmsAlert('SEND SMS', name, Nuban);

        //$('#sendMailModal').on('shown.bs.modal', function (e) {

        //    $('#txtCustomerName').val(name);
        //    $('#txtAccount').val(Nuban);
        //    $('#hddate').val(date);
        //});
    });
    $('#SendSmsNow').click(function () {
       
        var name = $('#txtSmsCustomerName').val();
        var acct = $('#txtSmsAccount').val();
        var smsBody = ($('#txtSmsWishes').val() + " From " + $('#txtSenderShortName').val());  
        var sendername = $('#txtSenderShortName').val();
        var date = $('#hdDate').val();
        var copyme = document.getElementById("copyme").checked;

        //console.log(name, acct, smsBody);
        var datatosend = { 'name': name, 'acct': acct, 'sms': smsBody, 'date': date, 'copyme': copyme, 'sendername': sendername };
        $.ajax({
            url: "processor.aspx?action=sendSms",
            data: datatosend,
            type: 'POST',
            success: function (data) {
               
                alert(data);
                $('#mySmsModal').modal('hide');
                $('#txtSmsWishes').val('');
                $('#SendSmsNow').prop('disabled', true);
            },
            error: function (data) {
               
                alert(data);
            }
        });
    });

    $('#SendEmailNow').click(function () {

        var name = $('#txtCustomerName').val();
        var acct = $('#txtAccount').val();
        var emailBody = $('#txtEmailContent').val();
        var date = $('#hdDate').val();
        var email = $('#hdEmail').val();
        console.log(name, acct, emailBody);
        var datatosend = { 'name': name, 'acct': acct, 'email': emailBody, 'date': date, 'emailAddress': email };
        $.ajax({
            url: "processor.aspx?action=sendMail",
            data: datatosend,
            type: 'POST',
            success: function (data) {
                alert(data);
                $('#SendEmailNow').prop('disabled', true);
            },
            error: function (data) {
                alert(data);
            }
        });
    });

    function showEmailAlert(title, customername, account) {
        $('#myModal1').modal('show');
        $('#popTitle').html(title);
        $('#popMessage').html(title);
        $('#txtCustomerName').val(customername);
        $('#txtAccount').val(account);
    }

    function showSmsAlert(title, customername, account) {

        $('#mySmsModal').modal('show');
        $('#popTitle').html(title);
        $('#popSmsHeader').html(title);
        $('#txtSmsCustomerName').val(customername);
        $('#txtSmsAccount').val(account);

    }

    $('.skipSchedule').click(function () {
        var id = $(this).closest("tr")   // Finds the closest row <tr>
                            .find("td:nth-child(4)")     // Gets a descendent 
                                .text().trim();       // Retrieves the text within <td>
        var datetime = $(this).closest("tr")   // Finds the closest row <tr>
                            .find("td:nth-child(5)")     // Gets a descendent 
                                .text().trim();       // Retrieves the text within <td>
        var datatosend = { 'id': id, 'date': datetime };
        $.ajax({
            url: "processor.aspx?action=skipSchedule",
            data: datatosend,
            type: 'POST',
            success: function (data) {
                alert(data);
                $('#SendEmailNow').prop('disabled', true);
            },
            error: function (data) {
                alert(data);
            }
        });
    });
    $('.cancelSchedule').click(function () {
        var id = $(this).closest("tr")   // Finds the closest row <tr>
                            .find("td:nth-child(4)")     // Gets a descendent 
                                .text().trim();       // Retrieves the text within <td>

        //var tbid = $(this).closest("tr")   // Finds the closest row <tr>
        //                    .find("td:nth-child(5)")     // Gets a descendent 
        //                        .text().trim();       // Retrieves the text within <td>
        var datatosend = { 'id': id };

        $.ajax({
            url: "processor.aspx?action=cancelSchedule",
            data: datatosend,
            type: 'POST',
            success: function (data) {
                alert(data);
                $('#SendEmailNow').prop('disabled', true);
            },
            error: function (data) {
                alert(data);
            }
        });
    });

    $('#txtSmsWishes').keyup(function () {
        var SMSsender = $('#txtSenderShortName').val();
        var emailBody = $('#txtSmsWishes').val();
        var len_s = SMSsender.length;
        var len_e = emailBody.length;
        var len = len_s + len_e + 6;
        $('#CharacterEntered').html(len);
        $('#CharacterRemaining').html(765 - len);

        if (160 >= len && len > 0) {
            $('#pageCount').html(1);
        }
        else if (306 >= len && len > 160) {
            $('#pageCount').html(2);
        }
        else if (459 >= len && len > 306) {
            $('#pageCount').html(3);
        }
        else if (612 >= len && len > 495) {
            $('#pageCount').html(4);
        }
        else
            $('#pageCount').html(5);

    });

    $('#txtSenderShortName').keyup(function () {
        var SMSsender = $('#txtSenderShortName').val();
        var emailBody = $('#txtSmsWishes').val();
        var len_s = SMSsender.length;
        var len_e = emailBody.length;
        var len = len_s + len_e + 6;
        $('#CharacterEntered').html(len);
        $('#CharacterRemaining').html(765 - len);

        if (160 >= len && len > 0) {
            $('#pageCount').html(1);
        }
        else if (306 >= len && len > 160) {
            $('#pageCount').html(2);
        }
        else if (459 >= len && len > 306) {
            $('#pageCount').html(3);
        }
        else if (612 >= len && len > 495) {
            $('#pageCount').html(4);
        }
        else
            $('#pageCount').html(5);

    });



    /* Third_Party Pay */

    $('#calend').daterangepicker({
        "singleDatePicker": true,
        "timePicker": true,
        "startDate": moment(),
        "endDate": moment(),
        "minDate": moment().subtract(1, 'hours')

    }, function (start, end, label) {
        console.log("New date range selected: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ")");
        $('#' + '<%=schDate.ClientId%>').val(start.format('YYYY-MM-DD hh:mm A'));
    });


    $('#calend1').daterangepicker({
        "timePicker": true,
        "startDate": moment(),
        "endDate": moment(),
        "minDate": moment().subtract(1, 'hours')
    }, function (start, end, label) {
        console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
        $('#' + '<%=schDate1.ClientId%>').val(start.format('DD MMM YYYY hh:mm A') + ' - ' + end.format('DD MMM YYYY hh:mm A'));
    });

    $('.pay').on('click', function (e) {
       
        var account = $(this).closest("tr")   // Finds the closest row <tr>
            .find("td:nth-child(2)")     // Gets a descendent 
            .text().trim();       // Retrieves the text within <td>
        var amount = $(this).closest("tr")   // Finds the closest row <tr> 
            .find("td:nth-child(3)")     // Gets a descendent  
            .text().trim();         // Retrieves the text within <td> 
        var name = $(this).closest("tr")   // Finds the closest row <tr> 
         .find("td:nth-child(1)")     // Gets a descendent  
         .text().trim();         // Retrieves the text within <td> 
     
        var remarks = $(this).closest("tr")   // Finds the closest row <tr> 
       .find("td:nth-child(4)")     // Gets a descendent  
       .text().trim();         // Retrieves the text within <td> 

        var path = location.pathname;
        var pathArray = path.split("/");
        pathArray.splice(pathArray.length - 1, 1);//remove the main.aspx
        var newpath = pathArray.join("/");
     
        if (!window.location.origin) {
            window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
        }
        var url = window.location.origin + newpath + "/main.aspx?sm=__a"; 

      
        //var post_data = { 'account': account, 'amount': amount, 'name': name, 'remarks':remarks } //or just some sort of data reading from a form
        //$.post( url, post_data);
        var form = $('<form action="' + url + '" method="post">' + 
         '<input type="text" name="account" value="' + account  + '" />' +
         '<input type="text" name="amount" value="' + amount + '" />' + 
         '<input type="text" name="name" value="' + name + '" />' +
         '<input type="text" name="remarks" value="' + remarks + '" />' +
         '</form>');
        $('body').append(form);
        form.submit();
    });

    /* End Third Party */



    /* Begin Third_party2*/
    $('#popOkayT').click(function () { yesClick(); });
    $('#popDismissT').click(function () { noClick(); });



    function yesClick() {
        //e.preventDefault();
        var path = location.pathname;
        var pathArray = path.split("/");
        pathArray.splice(pathArray.length - 1, 1);//remove the main.aspx -- d_b  d_c
        var newpath = pathArray.join("/");
        //     newpath = newpath.substring(1);
        var l = '';
        var page = document.getElementById('_ctl0_pageName').value;
        var datatosend = { 'page': page };
        $.ajax({
            url: "processor.aspx?action=set-session-var",
            type: "POST",
            data: datatosend,
            success: function (data) {
                if (!window.location.origin) {
                    window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
                }
                var url = window.location.origin + newpath + "/main.aspx";
                var form = $('<form action="' + url + '" method="post">' +
                       '<input type="text" name="type" value="preload" />' +
                  '</form>');
                $('body').append(form);
                form.submit();
            }

        });
        //console.log('Page ' + page);
        //    if (page === '3rdParty')
        //        l = location.origin + newpath + "/main.aspx?sm=d_b";
        //    else
        //        l = location.origin + newpath + "/main.aspx?sm=d_c";
        //    window.location = l;//+ "/main.aspx?sm=x_j&a=" + val;

        //    var url = l;

    }
    function noClick() {
        //e.preventDefault();
        var path = location.pathname;
        var pathArray = path.split("/");
        pathArray.splice(pathArray.length - 1, 1);//remove the main.aspx -- d_b  d_c
        var newpath = pathArray.join("/");
        //     newpath = newpath.substring(1);
        var l = '';
        var page = document.getElementById('_ctl0_pageName').value;
        var datatosend = { 'page': page };
        $.ajax({
            url: "processor.aspx?action=set-session-var-default",
            type: "POST",
            data: datatosend,
            success: function (data) {
                if (!window.location.origin) {
                    window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
                }
                var url = window.location.origin + newpath + "/main.aspx";
                var form = $('<form action="' + url + '" method="post">' + 
                '</form>');
                $('body').append(form);
                form.submit();
            }

        });

        //if (page === '3rdParty')
        //    l = location.origin + newpath + "/main.aspx?sm=e_d";
        //else
        //    l = location.origin + newpath + "/main.aspx?sm=e_f";
        //window.location = l;//+ "/main.aspx?sm=x_j&a=" + val;

        //var url = l;

        //var form = $('<form action="' + url + '" method="post">' +
        // '</form>');
        //$('body').append(form);
        //form.submit();
    }


    function showAlert(title, body, dismisstext, oktext) {

        $('#myModal').modal('show');
        $('#popTitle1').html(title);
        $('#popMessage').html(body);
        $('#popOkay').html(oktext);
        $('#popDismiss').html(dismisstext);

    }
     

    /* End Thrid_party2*/

    /*Begin Nibbs Dailt History*/

    $('.payN').on('click', function () {
        var account = $(this).closest("tr")   // Finds the closest row <tr>
            .find("td:nth-child(2)")     // Gets a descendent 
            .text().trim();       // Retrieves the text within <td>
        var amount = $(this).closest("tr")   // Finds the closest row <tr> 
            .find("td:nth-child(3)")     // Gets a descendent  
            .text().trim();         // Retrieves the text within <td> 
        var name = $(this).closest("tr")   // Finds the closest row <tr> 
             .find("td:nth-child(1)")     // Gets a descendent  
             .text().trim();         // Retrieves the text within <td> 
        var bank = $(this).closest("tr")   // Finds the closest row <tr> 
               .find("td:nth-child(4)")     // Gets a descendent  
               .text().trim();         // Retrieves the text within <td> 
        var bankCode = $(this).closest("tr")   // Finds the closest row <tr> 
              .find("td:nth-child(5)")     // Gets a descendent  
              .text().trim();         // Retrieves the text within <td> 
        var remarks = $(this).closest("tr")   // Finds the closest row <tr> 
             .find("td:nth-child(6)")     // Gets a descendent  
             .text().trim();         // Retrieves the text within <td> 

        console.log(bankCode);

        var path = location.pathname;
        var pathArray = path.split("/");
        pathArray.splice(pathArray.length - 1, 1);//remove the main.aspx
        var newpath = pathArray.join("/");
        //     newpath = newpath.substring(1);
        if (!window.location.origin) {
            window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
        }
        var l = window.location.origin + newpath + "/main.aspx?sm=__b";
        window.location = l;//+ "/main.aspx?sm=x_j&a=" + val;

        var url = l;

        var form = $('<form action="' + url + '" method="post">' +
         '<input type="text" name="account" value="' + account + '" />' +
         '<input type="text" name="amount" value="' + amount + '" />' +
         '<input type="text" name="name" value="' + name + '" />' +
         '<input type="text" name="bank" value="' + bank + '" />' +
         '<input type="text" name="bankcode" value="' + bankCode + '" />' +
         '<input type="text" name="remarks" value="' + remarks + '" />' +
         '</form>');
        $('body').append(form);
        form.submit();


    });
    /*End Nibbs Daily History*/

    /* Begin Nibss Faster Pay*/
    $('#calend').daterangepicker({
        "singleDatePicker": true,
        "timePicker": true,
        "startDate": moment(),
        "endDate": moment(),
        "minDate": moment().subtract(1, 'hours')

    }, function (start, end, label) {
        console.log("New date range selected: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ")");
        $('#' + '<%=schDate.ClientId%>').val(start.format('YYYY-MM-DD hh:mm A'));
    });


    $('#calend1').daterangepicker({
        "timePicker": true,
        "startDate": moment(),
        "endDate": moment(),
        "minDate": moment().subtract(1, 'hours')
    }, function (start, end, label) {
        console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
        $('#' + '<%=schDate1.ClientId%>').val(start.format('DD MMM YYYY hh:mm A') + ' - ' + end.format('DD MMM YYYY hh:mm A'));
    });

    //$('.pay').on('click', function () {
    //    var account = $(this).closest("tr")   // Finds the closest row <tr>
    //        .find("td:nth-child(2)")     // Gets a descendent 
    //        .text().trim();       // Retrieves the text within <td>
    //    var amount = $(this).closest("tr")   // Finds the closest row <tr> 
    //        .find("td:nth-child(3)")     // Gets a descendent  
    //        .text().trim();         // Retrieves the text within <td> 
    //    var name = $(this).closest("tr")   // Finds the closest row <tr> 
    //     .find("td:nth-child(1)")     // Gets a descendent  
    //     .text().trim();         // Retrieves the text within <td> 


    //    var path = location.pathname;
    //    var pathArray = path.split("/");
    //    pathArray.splice(pathArray.length - 1, 1);//remove the main.aspx
    //    var newpath = pathArray.join("/");
    //    //     newpath = newpath.substring(1);
    //    if (!window.location.origin) {
    //        window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    //    }
    //    var l = window.location.origin + newpath + "/main.aspx?sm=__a";
    //    window.location = l;//+ "/main.aspx?sm=x_j&a=" + val;

    //    var url = l;

    //    var form = $('<form action="' + url + '" method="post">' +
    //     '<input type="text" name="account" value="' + account + '" />' +
    //     '<input type="text" name="amount" value="' + amount + '" />' +
    //     '<input type="text" name="name" value="' + name + '" />' +
    //     '</form>');
    //    $('body').append(form);
    //    form.submit();


    //});

    /*End nibss faster Pay*/

    /**/
    $('.linke_d').on('click', function ()
    {
     //   e.preventDefault();
        var m = this;
        var path = location.pathname;
        var pathArray = path.split("/");
        pathArray.splice(pathArray.length - 1, 1);//remove the main.aspx
        var newpath = pathArray.join("/");
        //     newpath = newpath.substring(1);
        if (!window.location.origin) {
            window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
        }
        var l = window.location.origin + newpath + "/main.aspx?sm=__a";
        window.location = l;//+ "/main.aspx?sm=x_j&a=" + val;

        var url = l;

        var name = $(m).closest("tr")   // Finds the closest row <tr>
                             .find("td:nth-child(4)")     // Gets a descendent 
                                 .text().trim();       // Retrieves the text within <td>
        var account = $(m).closest("tr")   // Finds the closest row <tr> 
                               .find("td:nth-child(3)")     // Gets a descendent  
                               .text().trim();         // Retrieves the text within <td>


        var form = $('<form action="' + url + '" method="post">' +
       '<input type="text" name="account" value="' + account + '" />' +
       '<input type="text" name="amount" value="" />' +
         '<input type="text" name="name" value="' + name + '" />' +
         '<input type="text" name="remarks" value="Happy Birthday" />' +
         '<input type="text" name="type" value="Birthday" />' +
      '</form>');
        $('body').append(form);
        form.submit();
    });
    /**/



    /*SME Market hub click and link Redirect */
  //  $('.smeClick').click(function() {
   //     $('#smeMarketPrompt').modal('show');
   // });
  //  $('#popOkayRedirect').click(function () {
  //      $('#smeMarketPrompt').modal('hide');
   //     window.open("http://www.smemarkethub.com");
   // });
  //  $('#popDismissRedirect').click(function() {
   //     $('#smeMarketPrompt').modal('hide');
  //  });

    /* */
	
	 /*Habari click and link Redirect */
    $('.habClick').click(function () {
        $('#habMarketPrompt').modal('show');
    });
    $('#popOkayRedirect').click(function () {
        $('#habMarketPrompt').modal('hide');
        window.open("https://habarigt.com/");
    });
    $('#popDismissRedirect').click(function () {
        $('#habMarketPrompt').modal('hide');
    });

    /* */
    
})