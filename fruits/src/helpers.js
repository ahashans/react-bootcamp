const choice = (items)=>{
    return items[Math.floor(Math.random()*items.length)];
};

const remove = (items, item) => {
  if(items.includes(item)){
      items = items.splice(items.indexOf(item), 1);
      return item;
  }
  return undefined;
};
export {choice, remove};