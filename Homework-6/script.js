const mainBlock = document.getElementById("planets");

const getData = async () => {
    const res = await fetch("https://swapi.dev/api/planets");
    const data = await res.json();

    const planets = await data.results;
  
    let transformedData = [];

    planets.forEach(planet => 
    {
        let shortPlanet = {};
        shortPlanet["diameter"] = planet.diameter;
        shortPlanet["orbital_period"] = planet.orbital_period;
        shortPlanet["rotation_period"] = planet.rotation_period;
        shortPlanet["population"] = planet.population;
        shortPlanet["name"] = planet.name;
        transformedData.push(shortPlanet);
        let p = document.createElement('p');
        p.innerText = planet.name;
        mainBlock.appendChild(p);
    });
    console.log(transformedData);
};

getData();




     
               