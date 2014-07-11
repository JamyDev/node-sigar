var os = require("os");
var sigar = new require('./bin/' + os.platform() + '/sigar');

module.exports = function(){
	return new sigar.NodeSigar;
}
for(var k in sigar){
	if(k !== 'NodeSigar'){
		module.exports[k] = sigar[k];
	}
}
