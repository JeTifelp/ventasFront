import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

  transform(value:any, arg: any ): any {
    if (arg ==='' || arg.length <2) return value;
    const resultPost=[];
    for(const post of value ){      
      if(post.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPost.push(post);
      }
    }
    return resultPost;
  }
 
}
