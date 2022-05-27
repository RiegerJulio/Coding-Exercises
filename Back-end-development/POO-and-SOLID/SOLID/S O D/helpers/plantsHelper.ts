import fs from 'fs/promises';
import IPlant from '../interfaces/IPlant';

const getPlants = () => fs.readFile('./plantsData.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

const setTalkers = (newPlant: IPlant) => {
  fs.writeFile('./plantsData.json', JSON.stringify(newPlant));
};

export { getPlants, setTalkers };