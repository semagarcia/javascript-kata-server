import { Configuration, ConfigurationModel } from './../schemas/Configuration';

export class AdministrationService {

    /**
     * 
     */
    async getAllConfigurations() {
        return new Promise((resolve, reject) => {
            ConfigurationModel.find({}, { _id: 0, __v: 0 }, (err, configuration) => {
                if(err) reject(err);
                resolve(configuration);
            });
        });
    }

    /**
     * 
     * @param keyValue 
     */
    async getConfiguration(keyValue: string) {
        return new Promise((resolve, reject) => {
            ConfigurationModel.find({ key: keyValue }, { _id: 0, __v: 0 }, (err, config) => {
                if(err || !config) reject(err);
                resolve(config);
            });
        });
    }

    /**
     * 
     * @param keyValue 
     */
    static async getEnabledConfiguration(keyValue: string) {
        return new Promise((resolve, reject) => {
            ConfigurationModel.findOne(
                { key: keyValue, enabled: true }, 
                { value: 1, dataType: 1 }, 
                (err, config) => {
                    if(err || !config) reject(err);
                    if(config.dataType === 'string')
                        resolve(String(config.value));
                    else if(config.dataType === 'boolean')
                        resolve(Boolean(config.value));
                    else if(config.dataType === 'number')
                        resolve(Number(config.value));
                    else
                        resolve(config.value);
            });
        });
    }

    /**
     * 
     * @param key 
     * @param description 
     * @param value 
     * @param dataType 
     * @param enabled {boolean | string} 
     */
    async updateConfiguration(
        key: string, 
        description: string, 
        value: any, 
        dataType: string, 
        enabled: boolean) {
        return new Promise((resolve, reject) => {
            ConfigurationModel.findOne({ key }, async (err, config: Configuration) => {
                if(err) reject(err);

                if(config) {  // Exists
                    if(key) config.key = key;
                    if(description) config.description = description;
                    if(value) config.value = value;
                    if(dataType) config.dataType = dataType;
                    if(enabled) config.enabled = enabled;

                    // Update fields
                    config.save((err, updatedConfig) => {
                        if(err) reject(err);
                        resolve(updatedConfig);
                    });
                } else {  // No exists, create
                    await this.addNewConfiguration(key, description, value, dataType, enabled)
                        .then((configuration) => resolve(configuration))
                        .catch((err) => reject(err));
                }
            });
        });
    }

    /**
     * 
     * @param key 
     * @param description 
     * @param value 
     * @param dataType 
     * @param enabled {boolean | string} 
     */
    async addNewConfiguration(
            key: string, 
            description: string, 
            value: any, 
            dataType: string, 
            enabled: boolean | string) {
        return new Promise((resolve, reject) => {
            ConfigurationModel.create({ key, description, value, dataType, enabled }, (err, newConfig) => {
                if(err || !newConfig) reject(err);
                resolve(newConfig);
            });
        });
    }

}
