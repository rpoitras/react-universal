package com.rbpoitras.reactuniversal;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.core.env.Environment;

import javax.inject.Inject;
import java.net.InetAddress;
import java.net.UnknownHostException;

@SpringBootApplication
@ComponentScan( basePackages = {"com.rbpoitras.reactuniversal.config"})
public class ReactUniversal {

    private static final Logger log = LoggerFactory.getLogger(ReactUniversal.class);

    @Inject
    private Environment env;

    public static void main(String[] args) throws UnknownHostException {
        SpringApplication app = new SpringApplication(ReactUniversal.class);
        Environment env = app.run(args).getEnvironment();
        log.info("\n\n\t----------------------------------------------------------------------\n\t" +
                "Application '{}' is running!\n\t" +
                "Access URL: \thttp://{}:{}{}\n\t" +
                "----------------------------------------------------------------------\n\t",
                env.getProperty("spring.application.name"),
                InetAddress.getLocalHost().getHostAddress(),
                env.getProperty("server.port"),
                env.getProperty("server.contextPath")
        );
    }
}
