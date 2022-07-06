import * as newrelic from '@pulumi/newrelic'
import * as pulumi from '@pulumi/pulumi'

interface MyConfig {
  readonly foo: string
}

const config = new pulumi.Config().requireObject<MyConfig>('config')

console.log('config.foo', config.foo)

const policy = new newrelic.AlertPolicy('my-policy')
