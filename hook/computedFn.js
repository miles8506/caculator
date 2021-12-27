function computedFn(status, computedNum) {
  const count = Number(computedNum.count);
  const caculate = Number(computedNum.container);
  if (status === OPERATE_STATUS_DIVISION) {
    return count / caculate;
  } else if (status === OPERATE_STATUS_MULTIPLY) {
    return count * caculate;
  } else if (status === OPERATE_STATUS_SUB) {
    return count - caculate;
  } else if (status === OPERATE_STATUS_ADD) {
    return count + caculate;
  }
}
