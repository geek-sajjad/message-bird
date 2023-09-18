import { initClient } from "messagebird";

const messagebird = initClient("secret");

// messagebird.balance.read((err, res) => {
//   if (err) console.log(err);

//   console.log(res);
// });

const params = {
  originator: "TestMessage",
  recipients: ["phoneNumber"],
  body: "text message",
};

messagebird.messages.create(params, (err, res) => {
  if (err) console.log(err);

  console.log(res);
});
