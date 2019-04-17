const gradeUtils = {
    calcGradePointAverage: function (grades) {
        let sum = 0;
        let weightSum = 0;
        grades.forEach(grade => {
            const weight = grade.weight ? Number(grade.weight) : 0;
            const val = grade.val ? Number(grade.val) : 0;
            sum += val * weight;
            weightSum += weight;
        })
        if (weightSum == 0) return 0;
        return (sum / weightSum).toFixed(2);
    }
}

module.exports = gradeUtils;