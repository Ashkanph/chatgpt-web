import {
  type Settings,
  supportedModels
} from './Types.svelte'

export const recLangOptions = [
  'de-DE',
  'en-GB',
  'en-US',
  'es-VE',
  'es-ES',
  'fr-FR',
  'uk-UA',
  'ru-RU',
  'fa-IR'
]

export const modelSetting: Settings = {
  key: 'model',
  name: 'Model',
  default: 'gpt-3.5-turbo',
  title: 'The model to use - GPT-3.5 is cheaper, but GPT-4 is more powerful.',
  options: supportedModels,
  type: 'select'
}

export const settingsMap: Settings[] = [
  modelSetting,
  {
    key: 'temperature',
    name: 'Sampling Temperature',
    default: 1,
    title: 'What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.\n' +
              '\n' +
              'We generally recommend altering this or top_p but not both.',
    min: 0,
    max: 2,
    step: 0.1,
    type: 'number'
  },
  {
    key: 'top_p',
    name: 'Nucleus Sampling',
    default: 1,
    title: 'An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.\n' +
              '\n' +
              'We generally recommend altering this or temperature but not both',
    min: 0,
    max: 1,
    step: 0.1,
    type: 'number'
  },
  {
    key: 'n',
    name: 'Number of Messages',
    default: 1,
    title: 'How many chat completion choices to generate for each input message.',
    min: 1,
    max: 10,
    step: 1,
    type: 'number'
  },
  {
    key: 'max_tokens',
    name: 'Max Tokens',
    title: 'The maximum number of tokens to generate in the completion.\n' +
              '\n' +
              'The token count of your prompt plus max_tokens cannot exceed the model\'s context length. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).\n',
    default: 0,
    min: 0,
    max: 32768,
    step: 1024,
    type: 'number'
  },
  {
    key: 'presence_penalty',
    name: 'Presence Penalty',
    default: 0,
    title: 'Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model\'s likelihood to talk about new topics.',
    min: -2,
    max: 2,
    step: 0.2,
    type: 'number'
  },
  {
    key: 'frequency_penalty',
    name: 'Frequency Penalty',
    default: 0,
    title: 'Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model\'s likelihood to repeat the same line verbatim.',
    min: -2,
    max: 2,
    step: 0.2,
    type: 'number'
  },
  {
    type: 'textArea',
    key: 'system_message',
    name: 'System Message',
    default: '',
    title: 'A message to gently instruct the assistant'
  }
]
