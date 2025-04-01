


function validation(){
    let number;
    number=document.getElementById('number').value;

    if(number =='' || number==null){
        alert('Please enter all feilds')
        return false
    }
    else if(number.length!=10){
        alert('INVALID MOBILE NUMBER')
    }

    else
    alert('VALID MOBILE NUMBER')
}

    function validation(){
        let pwd,cpwd;
        pwd=document.getElementById('pwd').value;
        cpwd=document.getElementById('cpwd').value;

        if(pwd=='' ||cpwd=='' || pwd==null|| cpwd==null)
        {
            alert('PLEASE ENTER ALL FEILDS')
            return false
        }

        else
        {
            if(pwd.length <8   || pwd.length >16)
            
                {
                    alert ('PASSWORD LENTH SHOULD BE A RANGE 8 TO 16')
                }

                else
                {
                    if(pwd!=cpwd)
                    {
                        alert('PASSWORD DID NOT MATCHED')
                    }
                    else
                    alert('PASSWORD MATCHED SUCCESFULLY')
                }
            
            
            
            
            
}
}

