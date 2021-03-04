var wasmModule = new WebAssembly.Module(wasmCode);
var wasmInstance = new WebAssembly.Instance(wasmModule, wasmImports);
for(i=0;i<100;i++){
    for(j=0;j<100;j++){
        log(i+","+j+","+wasmInstance.exports.ggt(i,j));
    }
}

