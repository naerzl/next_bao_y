import XAPI, { Verb } from '@xapi/xapi'
import { XapiType } from './index.d'

// xapi动词
export class LrsXapiVerbs extends XAPI.Verbs {
  static readonly AUTHORIZE: Verb = {
    id: 'http://activitystrea.ms/schema/1.0/authorize',
    display: {
      'en-US': 'authorize',
      es: 'authorize',
    },
  }
}

export interface XapiClassType {
  actor: string
  object: string
  verb: string | XapiType['verb']
}

//
export class XapiStatementsClass {
  actor: XapiType['actor']
  verb: XapiType['verb']
  object: XapiType['object']
  constructor({ actor, object, verb }: XapiClassType) {
    this.actor = {
      objectType: 'Agent',
      openid: actor,
    }
    this.object = {
      objectType: 'Activity',
      id: object,
    }
    if (typeof verb === 'string') {
      this.verb = {
        id: verb,
      }
    } else {
      this.verb = verb
    }
  }
}
