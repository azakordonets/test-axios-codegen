"use strict";
exports.__esModule = true;
var swagger_axios_codegen_1 = require("swagger-axios-codegen");
var defaultOptions = {
    serviceNameSuffix: 'Service',
    enumNamePrefix: 'Enum',
    methodNameMode: 'operationId',
    outputDir: './service',
    fileName: 'service.index.ts',
    useStaticMethod: false,
    useCustomerRequestInstance: true,
    include: [],
    strictNullChecks: true,
    /** definition Class mode ,auto use interface mode to streamlined code*/
    modelMode: 'interface',
    useClassTransformer: false,
    source: require('./swagger.json')
};
swagger_axios_codegen_1.codegen(defaultOptions);
