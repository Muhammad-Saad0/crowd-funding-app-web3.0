module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const TAX_FEE = 5;

  console.log("deploying genesis contract...");
  await deploy("Genesis", {
    from: deployer,
    args: [TAX_FEE],
    log: true,
  });
};
