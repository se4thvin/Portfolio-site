// This file provides absolute path references for imports
import path from 'path';

// Base paths
export const SRC_PATH = path.join(process.cwd(), 'src');
export const COMPONENTS_PATH = path.join(SRC_PATH, 'components');
export const DATA_PATH = path.join(SRC_PATH, 'data');
export const LIB_PATH = path.join(SRC_PATH, 'lib');

// Create module paths map for reference
export const PATHS = {
  components: COMPONENTS_PATH,
  data: DATA_PATH,
  lib: LIB_PATH,
}; 