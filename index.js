import * as _ from "lodash";

export const handler = async () => {
  const max = 10;
  const val = _.random(max);
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      `OIDC Test Github-lambda! - Random# : ${val} - Change time : 13:39 9th Dec`
    ),
  };
  return response;
};
