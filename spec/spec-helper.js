beforeEach(function() {
    this.addMatchers({
        toMatchStackFrame: function(expected) {
            var actual = this.actual;
            var message = '';
            if (actual.getFunctionName() !== expected[0]) {
                message += 'expected functionName: ' + actual.getFunctionName() + ' to equal ' + expected[0] + '\n';
            }
            if (actual.getArgs() !== expected[1]) {
                message += 'expected args: ' + actual.getArgs() + ' to equal ' + expected[1] + '\n';
            }
            if (actual.getFileName() !== expected[2]) {
                message += 'expected fileName: ' + actual.getFileName() + ' to equal ' + expected[2] + '\n';
            }
            if (actual.getLineNumber() !== expected[3]) {
                message += 'expected lineNumber: ' + actual.getLineNumber() + ' to equal ' + expected[3] + '\n';
            }
            if (actual.getColumnNumber() !== expected[4]) {
                message += 'expected columnNumber: ' + actual.getColumnNumber() + ' to equal ' + expected[4] + '\n';
            }
            this.message = function() { return message };
            return message === '';
        }
    });
});



