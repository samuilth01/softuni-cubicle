const uniqid = require('uniqid');
const cubes = [{
    id: '3rl8rwlii13y0o',
    name: 'Cube',
    description: 'Cool cube',
    imageUrl: 'https://m.media-amazon.com/images/I/61fB-s4DPVS.jpg',
    difficultyLevel: 4,
},
{
    id: '2rl8rwlii13y0o',
    name: 'Cube 2',
    description: 'Cool cube 2',
    imageUrl: 'https://m.media-amazon.com/images/I/61fB-s4DPVS.jpg',
    difficultyLevel: 3,
}];


exports.getAll = (search, from, to) => {
    let result = cubes.slice();

    if (search) {
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (from) {
        result = result.filter(cube => cube.difficultyLevel >= Number(from));
    }

    if (to) {
        result = result.filter(cube => cube.difficultyLevel <= Number(to));
    }

    return result;
};

exports.getOne = (cubeId) => cubes.find(x => x.id == cubeId);

exports.create = (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData,
    };

    cubes.push(newCube);

    return newCube;
}