import { configure } from "@testing-library/react";

import * as expect from "@testing-library/jest-dom";
import expectExport from "expect";

configure({ testIdAttribute: "testid" });
expectExport.extend(expect);
