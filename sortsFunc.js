
function numberArr(len){
    arr=[];
    for(var i=0;i<len;i++){
        arr.push(i);
    }
    return arr;
}

function outOfOrder(arr) {
    var len=arr.length;
    var i=len;
    while(i>0){
        var x=Math.floor(Math.random()*len)-1;
        var y=Math.floor(Math.random()*len)-1;
        if(x>=0&&y>=0){
            var semp=arr[x];
            arr[x]=arr[y];
            arr[y]=semp;
        }
        i--;
    }
    return arr;
}



function bubbleSort(arr){
    var len=arr.length|0;
    for(var i=0;i<len;i++){
        for(var j=0;j<len-1-j;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}


function insertSort(arr){
    for(var i=0;i<arr.length;i++){
        var x=arr[i];
        for(var j=i-1;arr[j]>x;j--){
            arr[j+1]=arr[j];
        }
        if(arr[j+1]!=x){
            arr[j+1]=x;
        }
    }
    return arr;
}

function shellSort(arr){
    var gap=Math.floor(arr.length/2);
    while(gap>0){
        for(var i=gap;i<arr.length;i++){
            temp=arr[i];
            for(var j=i;j>=gap&&arr[j-gap]>temp;j-=gap){
                arr[j]=arr[j-gap];
            }
            arr[j]=temp;
        }
        gap=Math.floor(gap/2);
    }
    return arr;
}

function merge(left,right){
    var re=[];
    while(left.length>0&&right.length>0){
        if(left[0]<right[0]){
            re.push(left.shift())
        }else{
            re.push(right.shift());
        }
    }

    return re.concat(left).concat(right);
}

function mergeSort(arr){
    if(arr.length==1){
        return arr;
    }

    var mid=Math.floor(arr.length/2);
    var left=arr.slice(0,mid);
    var right=arr.slice(mid);

    return merge(mergeSort(left),mergeSort(right));
}

function oddEvenSort(arr){
    var swaped=true;
    var k=0;
    while(swaped){
        if(k>0){
            swaped=false;
        }
        for(var i=k;i<arr.length-1;i+=2){
            if(arr[i]>arr[i+1]){
                arr[i]=[arr[i+1],arr[i+1]=arr[i]][0];
                swaped=true;
            }
        }
        k=[1,0][k];
    }
    return arr;
}

function HeapSort(arr){
    for(var i=Math.floor((arr.length-1-1)/2);i>=0;i--){
        shiftDown(arr.length,i)
    }

    for(var i=arr.length-1;i>0;i--){
        var swap=arr[0];
        arr[0]=arr[i];
        arr[i]=swap;

        shiftDown(i,0);
    }
    return arr;
}

function shiftDown(n,k){
    while(2*k+1<n){
        var j=2*k+1;
        if(j+1<n&&arr[j+1]>arr[j])
           j+=1;
        if(arr[k]>=arr[j])
          break;
        var swap=arr[k];
        arr[k]=arr[j];
        arr[j]=swap;
        
        k=j;
    }
}

function quickSort(arr,l,r){
    if(l>r)
      return;
    if(l==r)
      return;
    
      var p=partition(arr,l,r);
      quickSort(arr,l,p-1);
      quickSort(arr,p+1,r);
}

function swapfun(arr,x,y){
    var swap=arr[x];
    arr[x]=arr[y];
    arr[y]=swap;
}

function partition(arr,l,r){
    var p=Math.floor(Math.random()*(r-l+1))+1;
    swapfun(arr,l,p);
    var v=arr[l];

    var j=l;
    for(var i=l+1;i<=r;i++){
        if(arr(i)<v){
            j++;
            swapfun(arr,j,i);
        }
    }
    swapfun(arr,l,j);

    return j;
}