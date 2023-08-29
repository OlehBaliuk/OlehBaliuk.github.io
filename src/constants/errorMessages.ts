import { StringMap } from '@/interfaces/StringMap'

const errorMessages: StringMap = {
  NotAllowedError: 'you need to grant camera access permission',
  NotFoundError: 'no camera on this device',
  NotSupportedError: 'secure context required (HTTPS, localhost)',
  NotReadableError: 'is the camera already in use?',
  OverconstrainedError: 'installed cameras are not suitable',
  StreamApiNotSupportedError: 'Stream API is not supported in this browser',
  InsecureContextError:
    'Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.'
}

export default errorMessages
