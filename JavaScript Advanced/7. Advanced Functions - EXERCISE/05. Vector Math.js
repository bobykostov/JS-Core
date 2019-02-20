(function () {
    return {
        add: (v1, v2) => [v1[0]+v2[0], v1[1]+v2[1]],
        multiply: (v, s) => [v[0]*s, v[1]*s],
        length: v => Math.sqrt(v[0]**2 + v[1]**2),
        dot: (v1, v2) => v1[0]*v2[0] + v1[1]*v2[1],
        cross: (v1, v2) => v1[0]*v2[1] - v1[1]*v2[0]
    };
})();