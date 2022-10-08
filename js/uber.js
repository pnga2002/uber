// var laySoKM = document.getElementById('soKM').value;
/**
 * tra ve tong tien dua vao so km va thoi gian cho
 */
function tinhTien(){
    var laySoKM =Number( document.getElementById('soKM').value);
    var layTG = Number(document.getElementById('tgCho').value);
    var divThanhTien = document.getElementById('thanhTien');
    divThanhTien.style.display = 'block';
    var spanTien = document.getElementById('xuatTien');
    
    var loaixe = LayLoai();
    
    /**
     *
     */var thanhTien;
    switch(loaixe){
        case 'uberX':
            if(laySoKM<=1){
                thanhTien = laySoKM*8000+layTG*2000;
            }else if(laySoKM>1 && laySoKM<=20){
                thanhTien = 8000*1 + (laySoKM-1)*12000+layTG*2000;
            }else if(laySoKM> 20){
                thanhTien = 8000*1 + 20 * 12000+ (laySoKM-21)*10000+layTG*2000;}
            break;
        case 'uberSUV':
            if(laySoKM<=1){
                thanhTien = laySoKM*9000+layTG*3000;
            }else if(laySoKM>1 && laySoKM<=20){
                thanhTien = 9000*1 + (laySoKM-1)*14000+layTG*3000;
            }else if(laySoKM> 20){
                thanhTien = 9000*1 + 20 * 14000+ (laySoKM-21)*12000+layTG*3000;}
            break;
        case 'uberBlack':
            if(laySoKM<=1){
                thanhTien = laySoKM*10000+layTG*4000;
            }else if(laySoKM>1 && laySoKM<=20){
                thanhTien = 10000*1 + (laySoKM-1)*16000+layTG*4000;
            }else if(laySoKM> 20){
                thanhTien = 10000*1 + 20 * 16000+ (laySoKM-21)*14000+layTG*4000;}
            break;
    }
    
    spanTien.innerHTML = thanhTien;
}

function LayLoai(){
    var kq;
    var uberX = document.getElementById('uberX').checked;
    var uberSUV = document.getElementById('uberSUV').checked;
    var uberBlack = document.getElementById('uberBlack').checked;
    if(uberX){
        kq='uberX';
    } else if(uberSUV){
        kq='uberSUV';
    } else if(uberBlack){
        kq='uberBlack';
    }
    return kq;
}