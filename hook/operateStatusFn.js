function operateStatusFn(operateStatus, status) {
  switch (status) {
    case 'plus':
      operateStatus.value = OPERATE_STATUS_ADD;
      break;
    case 'sub':
      operateStatus.value = OPERATE_STATUS_SUB;
      break;
    case 'multiply':
      operateStatus.value = OPERATE_STATUS_MULTIPLY;
      break;
    case 'division':
      operateStatus.value = OPERATE_STATUS_DIVISION;
      break;
  }
}