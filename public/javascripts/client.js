/////////////////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by Aaron Lu 2015 - ADN/Developer Technical Services
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////////////////

function login(){
  var url = '/login';
  $.ajax({
    type: "POST",
    url: url,
    data: {
      login_name: $('#login_name')[0].value,
      password: $('#password')[0].value
    },
    success: function( data ) {
      window.BIM360 = data;
      if(data && data.auth_token){
        $("#signin_form").html('');
        $("#login_info").html('<h2>Log in successfully!</h2><p>auth_token='+data.auth_token+'</p>');
      } else {
        $("#login_info").html('<h2>Log in failed: </h2><p class="error">'+data+'</p>');
      }
    }
  });
}