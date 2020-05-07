library identifier: 'nodeModuleBuilder@PROD', retriever: modernSCM(
  [$class: 'GitSCMSource',
   remote: "https://git.ellucian.com/scm/devops/jenkins-pipeline-node-module.git"
  ]
)
node('linux_standard') {
    nodeModuleBuilder([
        publishBranches: ['master'],
        runUnitTests: true,
        reportJUnitFiles: ['report.xml'],
        nodeLabel: 'NODE_VERSION_10X_LATEST'
    ])
}
