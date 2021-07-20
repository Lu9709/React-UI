function scopedClassMarker (prefix:string){
  return function y(name?:string){
      return [prefix,name].filter(Boolean).join('-')
  }
}
export {scopedClassMarker}