import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import {
  SiteConfig,
  PersonalConfig,
  HomeConfig,
  AboutConfig,
  NavigationConfig,
} from "@/types/config";

const configDir = path.join(process.cwd(), "src/config");

function loadYaml<T>(filename: string): T {
  const filePath = path.join(configDir, filename);
  const fileContents = fs.readFileSync(filePath, "utf8");
  return yaml.load(fileContents) as T;
}

export function getSiteConfig(): SiteConfig {
  return loadYaml<SiteConfig>("site.yaml");
}

export function getPersonalConfig(): PersonalConfig {
  return loadYaml<PersonalConfig>("personal.yaml");
}

export function getHomeConfig(): HomeConfig {
  return loadYaml<HomeConfig>("home.yaml");
}

export function getAboutConfig(): AboutConfig {
  return loadYaml<AboutConfig>("about.yaml");
}

export function getNavigationConfig(): NavigationConfig {
  return loadYaml<NavigationConfig>("navigation.yaml");
}
