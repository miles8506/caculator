const cpn = {
  setup() {
    // keyboard icon number
    const keyBoardNum = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '00', '.'];

    const showNum = Vue.ref('0');
    const computedNum = Vue.reactive({
      count: '0',
      container: '0'
    });
    const actionStatus = Vue.ref(true);
    const resetShowNum = Vue.ref(false);
    const operateStatus = Vue.ref('');

    // 防止加減乘除 連點
    let controlDoubleClick = true;
    // 防止等於 連點
    let controlResultClick = true;

    // click num
    const onNum = (num) => {
      if (actionStatus.value) {
        showNum.value = '';
        actionStatus.value = !actionStatus.value;
      } else if (resetShowNum.value) {
        showNum.value = '';
        resetShowNum.value = !resetShowNum.value;
      }
      showNum.value += num;

      // 判斷小數點
      const dotCount = showNum.value.split('').filter(item => item === '.');
      if (dotCount.length > 1) showNum.value= showNum.value.slice(0,-1);

      controlDoubleClick = !controlDoubleClick;
    };

    const onOperateStatus = (status) => {
      if (operateStatus.value === '') {
        computedNum.count = showNum.value;
        operateStatusFn(operateStatus, status);
      } else {
        operateStatusFn(operateStatus, status);
        if (!controlDoubleClick) return;
        computedNum.container = showNum.value;
        const res = computedFn(operateStatus.value, computedNum);
        computedNum.count = res;
        controlDoubleClick = !controlDoubleClick;
      }
      controlResultClick = true;
      resetShowNum.value = !resetShowNum.value;
    }

    // reset
    const onReset = () => {
      showNum.value = '0';
      computedNum.count = '0';
      computedNum.container = '0';
      actionStatus.value = true;
      resetShowNum.value = false;
      operateStatus.value = '';
      controlResultClick = true;
    }

    // result
    const onResult = () => {
      if (showNum.value === '0') return;
      if (computedNum.count === '0' && computedNum.container === '0') {
        return;
      }
      if (!controlResultClick) return;
      controlResultClick = !controlResultClick;
      computedNum.container = showNum.value;
      computedNum.count = computedFn(operateStatus.value, computedNum);
      showNum.value = computedNum.count;
      operateStatus.value = '';
    }
    
    return {
      keyBoardNum,
      showNum,
      computedNum,
      onNum,
      // onDivision,
      // onMultiply,
      // onSub,
      // onAdd,
      onOperateStatus,
      onReset,
      onResult
    }
  }
};

const app = Vue.createApp(cpn);
app.mount('#app');

    // +
    // const onAdd = () => {
    //   if (operateStatus.value === '') {
    //     computedNum.count = showNum.value;
    //     operateStatus.value = OPERATE_STATUS_ADD;
    //   } else {
    //     operateStatus.value = OPERATE_STATUS_ADD;
    //     if (!controlDoubleClick) return;
    //     computedNum.container = showNum.value;
    //     const res = computedFn(operateStatus.value, computedNum);
    //     computedNum.count = res;
    //     controlDoubleClick = !controlDoubleClick;
    //   }
    //   controlResultClick = true;
    //   resetShowNum.value = !resetShowNum.value;
    // }

    // -
    // const onSub = () => {
    //   if (operateStatus.value === '') {
    //     computedNum.count = showNum.value;
    //     operateStatus.value = OPERATE_STATUS_SUB;
    //   } else {
    //     operateStatus.value = OPERATE_STATUS_SUB;
    //     // 預防user重複點擊
    //     if (!controlDoubleClick) return;
    //     computedNum.container = showNum.value;
    //     const res = computedFn(operateStatus.value, computedNum);
    //     computedNum.count = res;
    //     controlDoubleClick = !controlDoubleClick;
    //   }
    //   controlResultClick = true;
    //   resetShowNum.value = !resetShowNum.value;
    // }

    // *
    // const onMultiply = () => {
    //   if (operateStatus.value === '') {
    //     computedNum.count = showNum.value;
    //     operateStatus.value = OPERATE_STATUS_MULTIPLY;
    //   } else {
    //     operateStatus.value = OPERATE_STATUS_MULTIPLY;
    //     if (!controlDoubleClick) return;
    //     computedNum.container = showNum.value;
    //     const res = computedFn(operateStatus.value, computedNum);
    //     computedNum.count = res;
    //     controlDoubleClick = !controlDoubleClick;
    //   }
    //   controlResultClick = true;
    //   resetShowNum.value = !resetShowNum.value;
    // }

    // /
    // const onDivision = () => {
    //   if (operateStatus.value === '') {
    //     computedNum.count = showNum.value;
    //     operateStatus.value = OPERATE_STATUS_DIVISION;
    //   } else {
    //     operateStatus.value = OPERATE_STATUS_DIVISION;
    //     if (!controlDoubleClick) return;
    //     computedNum.container = showNum.value;
    //     const res = computedFn(operateStatus.value, computedNum);
    //     computedNum.count = res;
    //     controlDoubleClick = !controlDoubleClick;
    //   }
    //   controlResultClick = true;
    //   resetShowNum.value = !resetShowNum.value;
    // }