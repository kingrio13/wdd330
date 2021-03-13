export default // Quake View handler
class QuakesView {
  renderQuakeList(quakeList, listElement) {
    listElement.innerHTML = quakeList.features
      .map(quake => {
        return `<li data-id=${quake.id}>${
          quake.properties.title
        } <span>${new Date(quake.properties.time)}</span></li>`;
      })
      .join('');
      
  }
  renderQuake(quake, element) {
    try{
    const quakeProperties = Object.entries(quake.properties);
    element.innerHTML = quakeProperties
      .map(item => {
        if (item[0] === 'time' || item[0] === 'updated') {
          return `<li>${item[0]}: ${new Date(item[1])}</li>`;
        } else return `<li>${item[0]}: ${item[1]}</li>`;
      })
      .join('');
  }
  catch (error) {
    console.log(error);
  }
  
  }
}
