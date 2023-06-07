import type { Environment } from 'vitest';
import { parseHTML } from 'linkedom';

export default <Environment>{
  name: 'linkedom',
  setup() {
    const localDocument = parseHTML("<html><body></body></html>");
    global.document = localDocument.document;
    
    return {
      teardown() {
        // called after all tests with this env have been run
      }
    }
  }
}