function subarr(arr){  
      let final=[] 
      for(i=0;i<arr.length;i++){ 
          for(j=i;j<arr.length;j++){ 
              let sub=[] 
              for(k=i;k<=j;k++){  
                  sub.push(arr[k])
              }
              final.push(sub)
          }
      }
      console.log(final)
      return nums.length-1
  }
  let nums=[1,2,3]
  let op=subarr(nums)
  console.log(op)