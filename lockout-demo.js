document.addEventListener("DOMContentLoaded", () => {
    let demoCheck = document.querySelector("#flexSwitchCheckDefault");
    demoCheck.addEventListener("change", handleDemo);
})

function handleDemo() {
    let demoCheck = document.querySelector("#flexSwitchCheckDefault").checked;
    let barcodeEle = document.querySelector("#barcode");
    if(demoCheck){
        barcodeEle.innerHTML = `<h5 class="alert alert-danger" role="alert">Card has been lockedout</h5>`;
    }
    else{
        barcodeEle.innerHTML = `<img src="images\\barcode.gif" class="img-fluid mb-3" alt="barcode placeholder">`;
    }
}