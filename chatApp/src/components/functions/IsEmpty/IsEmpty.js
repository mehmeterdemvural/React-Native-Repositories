function IsEmpty(val) {
  const valLength = val.length;
  if (valLength === 0) {
    return true;
  } else {
    const parsedVal = val.split('');
    const space = parsedVal.filter(item => {
      return item === ' ';
    });
    if (space.length === valLength) {
      return true;
    } else {
      return false;
    }
  }
}

export default IsEmpty;
