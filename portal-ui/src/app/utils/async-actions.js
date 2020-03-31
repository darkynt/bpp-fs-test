export const asyncTypeStr = (disposition, type) => (`${type}__${disposition}`)
export const unaryAction = type => payload => ({ type, payload })

export const asyncActionFactory = type => {
  const successType = asyncTypeStr('SUCCESS', type)
  const failureType = asyncTypeStr('FAILURE', type)

  const actionCreator = unaryAction(type)
  const successActionCreator = unaryAction(successType)
  const failureActionCreator = (error, metadata) => ({ type, ...metadata, error })

  return {
    type,
    successType,
    failureType,
    actionCreator,
    successActionCreator,
    failureActionCreator,
  }
}
