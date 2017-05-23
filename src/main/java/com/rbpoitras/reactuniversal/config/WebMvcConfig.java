package com.rbpoitras.reactuniversal.config;

import org.springframework.boot.autoconfigure.web.ResourceProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.resource.PathResourceResolver;

import javax.inject.Inject;
import java.io.IOException;

@Configuration
@EnableConfigurationProperties({ ResourceProperties.class })
public class WebMvcConfig extends WebMvcConfigurerAdapter {

  @Inject
  private ResourceProperties resourceProperties = new ResourceProperties();

  @Override
  public void addResourceHandlers(ResourceHandlerRegistry registry) {
    Integer cachePeriod = resourceProperties.getCachePeriod();

    final String[] staticLocations = resourceProperties.getStaticLocations();
    final String[] indexLocations = new String[staticLocations.length];
    for (int i = 0; i < staticLocations.length; i++) {
      indexLocations[i] = staticLocations[i] + "index.html";
    }
    registry.addResourceHandler(
      "/**/*.css",
      "/**/*.html",
      "/**/*.js",
      "/**/*.json",
      "/**/*.bmp",
      "/**/*.jpeg",
      "/**/*.jpg",
      "/**/*.gif",
      "/**/*.ico",
      "/**/*.png",
      "/**/*.ttf",
      "/**/*.wav",
      "/**/*.mp3",
      "/**/*.eot",
      "/**/*.svg",
      "/**/*.woff",
      "/**/*.woff2",
      "/**/*.map"
    )
      .addResourceLocations(staticLocations)
      .setCachePeriod(cachePeriod);

    registry.addResourceHandler("/**")
      .addResourceLocations(indexLocations)
      .setCachePeriod(cachePeriod)
      .resourceChain(true)
      .addResolver(new PathResourceResolver() {
        @Override
        protected Resource getResource(String resourcePath, Resource location) throws IOException {
          return location.exists() && location.isReadable() ? location : null;
        }
      });
  }
}
